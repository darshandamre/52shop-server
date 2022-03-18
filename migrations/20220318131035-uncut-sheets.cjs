"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "1st V3 Uncut Sheet",
        description:
          "1st V3 Uncut Sheet printed by the United States Playing Card Company. One side with the 1st V3 leaf design and the 1st golden logo, the other side with the faces. All uncut sheets ships in a tube for protection.",
        stock: 0,
        price: 7699,
        discount: 0,
        rating: 4.3,
        pictureLink:
          "https://shop-images.vercel.app/products/uncut-sheets/v3-uncut-sheets.webp",
        categoryId: 2,
        fastDelivery: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "1st V4 Uncut Sheet",
        description:
          "1st V4 Uncut Sheet printed by the United States Playing Card Company. One side with the 1st futuristic logo in red and a flipped joker, the other side with the faces. All uncut sheets ships in a tube for protection.",
        stock: 10,
        price: 7699,
        discount: 200,
        rating: 4.1,
        pictureLink:
          "https://shop-images.vercel.app/products/uncut-sheets/v4-uncut-sheets.webp",
        categoryId: 2,
        fastDelivery: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {}
};
