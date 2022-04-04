'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: {
      references: { model: "Spots" },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    userId: {
      references: { model: "Users" },
      allowNull: false,
      type: Datatypes.INTEGER
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Spot, {foreignKey: "spotId"});
    Booking.belongsTo(models.User, {foreignKey: "userId"});
  };
  return Booking;
};
