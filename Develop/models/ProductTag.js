const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  },
  {

  
    freezeTableName: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
