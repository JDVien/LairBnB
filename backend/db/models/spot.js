'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId:  {
      foreignKey: true,
      references: { model: "Users"},
      allowNull: false,
      type: DataTypes.INTEGER
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, {foreignKey: "userId"})
    // Spot.hasMany(models.Image, {foreignKey: "spotId"})
  };
  return Spot;
};
