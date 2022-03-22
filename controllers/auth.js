import argon2 from "argon2";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  let user;

  try {
    const { name, email, password } = req.body;
    const hashedPassword = await argon2.hash(password);
    user = await User.create({ name, email, password: hashedPassword });
  } catch (err) {
    if (err.parent.code === "23505") {
      return res.status(400).json({
        errors: [
          {
            field: "email",
            message: "user already exists"
          }
        ]
      });
    }

    return next(err);
  }

  const { id, name, email } = user;
  const token = jwt.sign({ id, name, email }, process.env.SECRET);

  return res.status(201).json({
    data: {
      token,
      user: {
        id,
        name,
        email
      }
    }
  });
};

const login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  let user;

  try {
    user = await User.findOne({
      where: { email }
    });

    if (!user) {
      return res.json({
        errors: [
          {
            field: "email",
            message: "user doesn't exist"
          }
        ]
      });
    }

    const valid = await argon2.verify(user.password, password);

    if (!valid) {
      return res.json({
        errors: [
          {
            field: "password",
            message: "wrong password"
          }
        ]
      });
    }
  } catch (err) {
    return next(err);
  }

  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    process.env.SECRET
  );

  return res.json({
    data: { token, user: { id: user.id, name: user.name, email: user.email } }
  });
};

const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      error: "not logged in"
    });
  }

  const user = jwt.verify(token, process.env.SECRET);

  try {
    const userExists = !!(await User.findByPk(user.id, {
      attributes: ["id"]
    }));

    if (!userExists) {
      return res.status(404).json({
        error: "user not found"
      });
    }
  } catch (err) {
    return next(err);
  }

  req.user = user;
  return next();
};

export { signup, login, isAuthenticated };
