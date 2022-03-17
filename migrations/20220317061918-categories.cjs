module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("categories", [
      {
        name: "Cards",
        pictureLink:
          "https://shop-images.vercel.app/categories/category-cards-square.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Uncut Sheets",
        pictureLink:
          "https://shop-images.vercel.app/categories/uncut-sheet-180.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cardistry Trainers",
        pictureLink:
          "https://shop-images.vercel.app/categories/cardistry-trainers.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Magic Tricks",
        pictureLink:
          "https://shop-images.vercel.app/categories/magic-trick-category-square.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Accessories",
        pictureLink:
          "https://shop-images.vercel.app/categories/accessories-category-square.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {}
};
