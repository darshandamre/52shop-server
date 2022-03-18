"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "Neon Trainers",
        description:
          "Cardistry is already such a unique art form and The Neon Deck is how the SansMinds Creative Lab wants to contribute to that art form. The Neon Deck is not your regular acrylic trainer. It has been specially made to glow under a black light! That way, the deck will make your cardistry video even more exciting! Each deck is made up of 9 packets. Every piece is customized into 2mm thick from raw material that is 30% thinner than standard existing material, for the ultimate performance. Each piece is laminated front and back to ensure that you receive them in mint condition.",
        stock: 50,
        price: 1999,
        discount: 200,
        rating: 3.6,
        pictureLink:
          "https://shop-images.vercel.app/products/cardistry-trainers/neon-trainers.webp",
        categoryId: 3,
        fastDelivery: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hard NOCs",
        description:
          "Introducing HARD NOCs (Ha!) - Cardistry Trainers which perfectly compliment your NOCs. Each set contains FIVE (5) cardistry trainers, which when put together perfectly equal the thickness of a deck of cards. There are GREAT cardistry trainers out there by a variety of companies - and we strongly suggest checking them out - but when you want the original NOC trainers, HARD NOCs is the answer!",
        stock: 60,
        price: 2999,
        discount: 500,
        rating: 3.9,
        pictureLink:
          "https://shop-images.vercel.app/products/cardistry-trainers/hard-nocs.webp",
        categoryId: 3,
        fastDelivery: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {}
};
