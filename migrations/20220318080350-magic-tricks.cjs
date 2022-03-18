module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "Three Envelopes",
        description:
          "Impossibly swap the position of playing cards or bills inside an envelope—right in front of your spectator's face. From transpositions to monte routines, these high-quality envelopes make switching easy. They are sleek and elegant, and are constructed of 100% plastic material that is waterproof and won't tear. You can carry 'Three Envelopes' with you anywhere and use them for countless performances. Super easy to use. Perform anywhere. Comes with comprehensive online video tutorial.",
        stock: 100,
        price: 2399,
        discount: 400,
        rating: 2.8,
        pictureLink:
          "https://shop-images.vercel.app/products/magic-tricks/three-envelopes.webp",
        categoryId: 4,
        fastDelivery: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Moses Card",
        description:
          "A special gimmick for visual card magic miracles. Elevate your favorite card tricks. 'Moses Card' allows you to change cards from red to blue, and then reverse things and change them from red to blue. It's a very strong visual. The gimmick takes care of all the hard work for you.",
        stock: 90,
        price: 2999,
        discount: 200,
        rating: 3.5,
        pictureLink:
          "https://shop-images.vercel.app/products/cards/category-cards.webp",
        categoryId: 4,
        fastDelivery: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {}
};
