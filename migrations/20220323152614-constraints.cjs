"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("cartItems", {
      type: "check",
      fields: ["quantity"],
      name: "greaterThanZero",
      where: {
        quantity: {
          [Sequelize.Op.gt]: 0
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {}
};
