'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Item }) {
      // define association here
      Category.hasMany(Item, { foreignKey: 'category_id' });
    }
  }
  Category.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );
  return Category;
};
