"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OTT extends Model {
    static associate(models) {
      models.OTT.hasMany(models.Party, {
        foreignKey: "ott_id",
        sourceKey: "id",
      });
    }
  }
  OTT.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "OTT",
      tableName: "OTT",
    }
  );

  return OTT;
};