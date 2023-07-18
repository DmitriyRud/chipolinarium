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
        image: '/image/categories/salad.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Грибы',
        image: '/image/categories/mushroom.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Салаты из моркови',
        image: '/image/categories/carrots.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Салаты из капусты',
        image: '/image/categories/cabbage-salad.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Баклажаны',
        image: '/image/categories/eggplant.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Пикантные соленья',
        image: '/image/categories/pickles.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Другие закуски',
        image: '/image/categories/snacks.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
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
