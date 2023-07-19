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
        description: ' Вкусные салаты. Вкусные салаты. Вкусные салаты. Вкусные салаты. Вкусные салаты. Вкусные салаты.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Грибы',
        image: '/image/categories/mushroom.jpg',
        description: 'Вкусные грибы. Вкусные грибы. Вкусные грибы. Вкусные грибы. Вкусные грибы. Вкусные грибы.Вкусные грибы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Салаты из моркови',
        image: '/image/categories/carrots.jpg',
        description: 'Вкусные салаты из моркови. Вкусные салаты из моркови. Вкусные салаты из моркови. Вкусные салаты из моркови',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Салаты из капусты',
        image: '/image/categories/cabbage-salad.jpg',
        description: 'Вкусные салаты из капусты. Вкусные салаты из капусты. Вкусные салаты из капусты.Вкусные салаты из капусты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Баклажаны',
        image: '/image/categories/eggplant.jpg',
        description: 'Вкусные салаты из баклажанов. Вкусные салаты из баклажанов. Вкусные салаты из баклажанов. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Пикантные соленья',
        image: '/image/categories/pickles.jpg',
        description: 'Вкусные соленья. Вкусные соленья. Вкусные соленья.Вкусные соленья. Вкусные соленья. Вкусные соленья',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Другие закуски',
        image: '/image/categories/snacks.jpg',
        description: 'Вкусные закуски. Вкусные закуски. Вкусные закуски. Вкусные закуски.Вкусные закуски. Вкусные закуски',
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
