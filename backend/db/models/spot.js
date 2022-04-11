"use strict";
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define(
    "Spot",
    {
      userId: {
        foreignKey: true,
        references: { model: "Users" },
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
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
      },
      amenities: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      spotType: {
        allowNull: false,
        type: DataTypes.STRING(50)
      }
    },
    {}
  );
  Spot.associate = function (models) {
    Spot.belongsTo(models.User, { foreignKey: "userId" });
    Spot.hasMany(models.Image, {
      foreignKey: "spotId",
      hooks: true,
      onDelete: "CASCADE",
    });
    Spot.hasMany(models.Review, {
      foreignKey: "spotId",
      hooks: true,
      onDelete: "CASCADE",
    });
    Spot.hasMany(models.Booking, {
      foreignKey: "spotId",
      hooks: true,
      onDelete: "CASCADE",
    });
  };
  return Spot;
};
