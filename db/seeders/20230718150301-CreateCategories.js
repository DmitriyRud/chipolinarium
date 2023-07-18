'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Салаты',
        image: 'image/categories/salad.jpg',
      },
      {
        title: 'Грибы',
        image: 'image/categories/mushroom.jpg',
      },
      {
        title: 'Салаты из моркови',
        image: 'image/categories/carrots.jpg',
      },
      {
        title: 'Салаты из капусты',
        image: 'image/categories/cabbage-salad.jpg',
      },
      {
        title: 'Баклажаны',
        image: 'image/categories/eggplant.jpg',
      },
      {
        title: 'Пикантные соленья',
        image: 'image/categories/pickles.jpg',
      },
      {
        title: 'Другие закуски',
        image: 'image/categories/snacks.jpg',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
