'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      references: { model: "Users" },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    spotId: {
      references: { model: "Spots" },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    review: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Spot, {foreignKey: "spotId"});
    Review.belongsTo(models.User, {foreignKey: "userId"});
  };
  return Review;
};
