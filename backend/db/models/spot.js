'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId:  {
      foreignKey: true,
      references: { model: "Users"},
      allowNull: false,
      type: Datatypes.UUID
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    city: {
      allowNull: fals,
      type: DataTypes.STRING(255),
    }
    state: {
      allowNull: fals,
      type: DataTypes.STRING(255),
    }
    country: {
      allowNull: fals,
      type: DataTypes.STRING(255),
    }
    name: {
      allowNull: fals,
      type: DataTypes.STRING(255),
    }
    price: {
      allowNull: fals,
      type: DataTypes.DECIMAL(3,2),
    }
  }, {});
  Spot.associate = function(models) {
    Spot.hasOne(models.User, {foreignKey: "userId"})
    Spot.hasMany(models.Image, {foreignKey: "spotId"})
  };
  return Spot;
};
