"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "Bicycle Standard Red",
        description:
          "Every Bicycle playing card deck is specially crafted so that you can trust Bicycle cards performance, hand after hand. Great for all card games. Great for all players. Printed on premium Bicycle brand cardstock Classic Air-Cushion Finish for ease of shuffling and optimum performance Available in both Red and Blue - order 2 and get 1 of each.",
        stock: 300,
        price: 399,
        discount: 100,
        rating: 2.8,
        pictureLink:
          "https://shop-images.vercel.app/products/cards/bicycle-standard-red.webp",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "1st Playing Cards v4",
        description:
          "Printed by the USPCC. Bicycle stock. Crushed. Smooth Finish. This deck was made with a purposeful minimalistic style to emulate products and tools found aboard a space ship. We've however, spared no expense on the quality of the cards. Included: 52 Playing cards. One blank card. One Gaff Card. Identical Jokers. Mnemonica stack.",
        stock: 100,
        price: 899,
        discount: 100,
        rating: 3.5,
        pictureLink:
          "https://shop-images.vercel.app/products/cards/category-cards.webp",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "1st Playing Cards v3",
        description:
          "Premium, crushed Bicycle stock. The V3 have the highest attention to quality of any playing cards currently on the market. Printed by the United States Playing Card Company, they feature beautiful Metalux foiling on the backs and some faces of the cards. The Deck comes in Mnemonica stack with a duplicate 4 of Spades and a playing card reveal on the King of Hearts. Both jokers are also foil stamped and identical.",
        stock: 30,
        price: 1199,
        discount: 200,
        rating: 4.2,
        pictureLink:
          "https://shop-images.vercel.app/products/cards/first-playing-cards.webp",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Seafoam Fontaines",
        description:
          "Seafoam Fontaines are the fourth NEON Pantone Fontaine. They are 1 of 2500 printed at USPCC in crushed stock.",
        stock: 33,
        price: 999,
        discount: 100,
        rating: 3.2,
        pictureLink:
          "https://shop-images.vercel.app/products/cards/fontaine-neon-orange.webp",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Memento Mori Playing Cards",
        description:
          "Memento Mori Deck, Made in USA from USPCC. The low-poly design is simple and post-modern. Stemming from the medieval latin theory and practice of reflection on mortality.",
        stock: 110,
        price: 1499,
        discount: 200,
        rating: 4.1,
        pictureLink:
          "https://shop-images.vercel.app/products/cards/bicycle-standard-red.webp",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Orbit v8",
        description:
          "From another universe. Following “suit” with the V7s, we decided to put out a limited number of V8 Parallel edition sets. Designed to be the “inverse” of the main deck, this is a must-have for collectors and Orbit enthusiasts who want to complete the line of orbit decks. Crushed Bee stock",
        stock: 50,
        price: 1099,
        discount: 100,
        rating: 3.8,
        pictureLink:
          "https://shop-images.vercel.app/products/cards/orbit-v8.webp",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Red Wheel Playing Cards",
        description:
          "Deck by Dan & Dave. Very Limited Edition Deck. Made in USA from USPCC. A new classic to your collection",
        stock: 60,
        price: 1599,
        discount: 200,
        rating: 4.3,
        pictureLink:
          "https://shop-images.vercel.app/products/cards/red-wheels-playing-cards.webp",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Summer NOCs Blue",
        description:
          "Printed to perfection. Bicycle Premium Stock with THIN CRUSH Finish.",
        stock: 80,
        price: 849,
        discount: 150,
        rating: 2.9,
        pictureLink:
          "https://shop-images.vercel.app/products/cards/summer-nocs-blue.webp",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Summer NOCs Orange",
        description:
          "The NOC's have proven to be a top choice for card collectors, and card enthusiasts.",
        stock: 78,
        price: 849,
        discount: 150,
        rating: 2.9,
        pictureLink:
          "https://shop-images.vercel.app/products/cards/summer-nocs-orange.webp",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Virtuoso P1",
        description:
          "The FIRST in the Virtuoso's Perspective Series. No two faces are alike. The back's signature center circle now 'passes through' from the back to the faces --unifying the back and face. Includes NEW VIBRANTLY COLORED icons (geometric suits) that form progressively larger arrays around the center circle -creating a spectrum of visuals NEVER seen before in a deck of cards.",
        stock: 40,
        price: 1799,
        discount: 200,
        rating: 4.4,
        pictureLink:
          "https://shop-images.vercel.app/products/cards/virtuoso-playing-cards.webp",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {}
};
