const me = (req, res) => {
  return res.json({
    data: {
      user: req.user,
      wishlist: [],
      cart: []
    }
  });
};

export { me };
