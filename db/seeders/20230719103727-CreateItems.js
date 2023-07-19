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
    await queryInterface.bulkInsert('Items', [
      {
        name: 'Салат из капусты витаминный',
        description: 'Салат из капусты витаминный',
        image: '/image/items/item1.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат из капусты весенний',
        description: 'Салат из капусты весенний',
        image: '/image/items/item2.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат из капусты провансаль',
        description: 'Салат из капусты провансаль',
        image: '/image/items/item3.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат из капусты со свеклой',
        description: 'Салат из капусты со свеклой',
        image: '/image/items/item4.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат фунчоза с овощами',
        description: 'Салат фунчоза с овощами',
        image: '/image/items/item5.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат фунчоза широкая',
        description: 'Салат фунчоза широкая',
        image: '/image/items/item6.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат чука',
        description: 'Салат чука',
        image: '/image/items/item7.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат из пекинской капусты острый',
        description: 'Салат из пекинской капусты острый',
        image: '/image/items/item8.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат из пекинской капусты не острый',
        description: 'Салат из пекинской капусты не острый',
        image: '/image/items/item9.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат корень сельдерея',
        description: 'Салат корень сельдерея',
        image: '/image/items/item10.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат хе из кальмаров',
        description: 'Салат хе из кальмаров',
        image: '/image/items/item11.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат редька по-корейски',
        description: 'Салат редька по-корейски',
        image: '/image/items/item12.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат кабачки маринованные',
        description: 'Салат кабачки маринованные',
        image: '/image/items/item13.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат рыба хе',
        description: 'Салат рыба хе',
        image: '/image/items/item14.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат хе из мяса',
        description: 'Салат хе из мяса',
        image: '/image/items/item15.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат хе из куриного филе',
        description: 'Салат хе из куриного филе',
        image: '/image/items/item16.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат хе из сердца говяжьего',
        description: 'Салат хе из сердца говяжьего',
        image: '/image/items/item17.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат хе из куриных сердечек',
        description: 'Салат хе из куриных сердечек',
        image: '/image/items/item1.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат хе из мяса с огурцами',
        description: 'Салат хе из мяса с огурцами',
        image: '/image/items/item19.jpeg',
        category_id: 1,
      },
      {
        name: 'Салат хе из  курицы по-китайски',
        description: 'Салат хе из  курицы по-китайски',
        image: '/image/items/item20.jpeg',
        category_id: 1,
      },
      {
        name: 'Грибы опята маринованные	',
        description: 'Грибы опята маринованные',
        image: '/image/items/item21.jpeg',
        category_id: 2,
      },
      {
        name: 'Грибы маслята маринованные	',
        description: 'Грибы маслята маринованные',
        image: '/image/items/item22.jpeg',
        category_id: 2,
      },
      {
        name: 'Грибы шампиньоны	',
        description: 'Грибы шампиньоны',
        image: '/image/items/item23.jpeg',
        category_id: 2,
      },
      {
        name: 'Грибы грузди шиитаке',
        description: 'Грибы грузди шиитаке',
        image: '/image/items/item24.jpeg',
        category_id: 2,
      },
      {
        name: 'Грибы вешенки маринованные	',
        description: 'Грибы вешенки маринованные',
        image: '/image/items/item25.jpeg',
        category_id: 2,
      },
      {
        name: 'Морковь по-корейски',
        description: 'Морковь по-корейски',
        image: '/image/items/item26.jpeg',
        category_id: 3,
      },
      {
        name: 'Морковь по-корейски острая',
        description: 'Морковь по-корейски острая',
        image: '/image/items/item27.jpeg',
        category_id: 3,
      },
      {
        name: 'Морковь по-корейски с баклажанами',
        description: 'Морковь по-корейски с баклажанами',
        image: '/image/items/item28.jpeg',
        category_id: 3,
      },
      {
        name: 'Морковь по-корейски с сельдереем',
        description: 'Морковь по-корейски с сельдереем',
        image: '/image/items/item29.jpeg',
        category_id: 3,
      },
      {
        name: 'Морковь с грибами',
        description: 'Морковь с грибами',
        image: '/image/items/item30.jpeg',
        category_id: 3,
      },
      {
        name: 'Морковь по-корейски с огурцами',
        description: 'Морковь по-корейски с огурцами',
        image: '/image/items/item31.jpeg',
        category_id: 3,
      },
      {
        name: 'Капуста с шафраном',
        description: 'Капуста с шафраном',
        image: '/image/items/item32.jpeg',
        category_id: 4,
      },
      {
        name: 'Квашенная капуста ',
        description: 'Квашенная капуста ',
        image: '/image/items/item33.jpeg',
        category_id: 4,
      },
      {
        name: 'Капуста по-гурийски',
        description: 'Капуста по-гурийски',
        image: '/image/items/item34.jpeg',
        category_id: 4,
      },
      {
        name: 'Капуста ча',
        description: 'Капуста ча',
        image: '/image/items/item35.jpeg',
        category_id: 4,
      },
      {
        name: 'Капуста ча острая',
        description: 'Капуста ча острая',
        image: '/image/items/item35.jpeg',
        category_id: 4,
      },
      {
        name: 'Капуста с яблоками и хреном',
        description: 'Капуста с яблоками и хреном',
        image: '/image/items/item37.jpeg',
        category_id: 4,
      },
      {
        name: 'Капуста маринованная с морковью',
        description: 'Капуста маринованная с морковью',
        image: '/image/items/item38.jpeg',
        category_id: 4,
      },
      {
        name: 'Капуста Морская',
        description: 'Капуста Морская',
        image: '/image/items/item39.jpeg',
        category_id: 4,
      },
      {
        name: 'Баклажаны фаршированные',
        description: 'Баклажаны фаршированные',
        image: '/image/items/item40.jpeg',
        category_id: 5,
      },
      {
        name: 'Баклажаны по-китайски',
        description: 'Баклажаны по-китайски',
        image: '/image/items/item41.jpeg',
        category_id: 5,
      },
      {
        name: 'Огурцы соленые',
        description: 'Огурцы соленые',
        image: '/image/items/item42.jpeg',
        category_id: 6,
      },
      {
        name: 'Чеснок соленый',
        description: 'Чеснок соленый',
        image: '/image/items/item43.jpeg',
        category_id: 6,
      },
      {
        name: 'Перец острый соленый',
        description: 'Перец острый соленый',
        image: '/image/items/item44.jpeg',
        category_id: 6,
      },
      {
        name: 'Помидоры черри соленые',
        description: 'Помидоры черри соленые',
        image: '/image/items/item45.jpeg',
        category_id: 6,
      },
      {
        name: 'Огурцы соленые в томате',
        description: 'Огурцы соленые в томате',
        image: '/image/items/item46.jpeg',
        category_id: 6,
      },
      {
        name: 'Спаржа по-корейски	',
        description: 'Спаржа по-корейски	',
        image: '/image/items/item47.jpeg',
        category_id: 7,
      },
      {
        name: 'Спаржа по-корейски	с морковью',
        description: 'Спаржа по-корейски	с морковью',
        image: '/image/items/item48.jpeg',
        category_id: 7,
      },
      {
        name: 'Свекла по-корейски	',
        description: 'Свекла по-корейски	',
        image: '/image/items/item49.jpeg',
        category_id: 7,
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
    await queryInterface.bulkDelete('Items', null, {});
  },
};
