'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {}

  Book.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    description: DataTypes.JSON,
    lastPageRead: DataTypes.INTEGER,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
    timestamps: true,
    tableName: 'book'
  });
  
  return Book;
};
