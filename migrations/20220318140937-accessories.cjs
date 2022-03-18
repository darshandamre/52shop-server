"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "Classic Card Clip",
        description:
          "An essential to anyone serious about their craft, the Classic Clip is an indispensable utility that will add months onto the longevity of your go-to deck of playing cards. Made by Dan and Dave, each clip is precision crafted to be both functional and stylish. Nowhere else will you find clips of the same caliber. You'll find that not only has Dan and Dave set the standard of a superior card clip, but time and time again they hit their mark of excellence in every clip produced.",
        stock: 50,
        price: 3499,
        discount: 500,
        rating: 4.4,
        pictureLink:
          "https://shop-images.vercel.app/products/accessories/card-clips.webp",
        categoryId: 5,
        fastDelivery: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Suede Leather Pad",
        description:
          "These pads provide the perfect surface for your magical effects. Select special flannelette material. The fabric is perfectly fitted with high-density sponge, with excellent resilience. Black litchi grain leather sole is selected for anti-slip and wear resistance. The fabric and base material are supported by hard wood boards with moderate hardness and higher integrity.",
        stock: 100,
        price: 1999,
        discount: 500,
        rating: 4,
        pictureLink:
          "https://shop-images.vercel.app/products/accessories/leather-pad.webp",
        categoryId: 5,
        fastDelivery: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {}
};
