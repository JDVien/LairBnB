'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    spotId: {
      references: { model: "Spots" },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING(255)
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Spot, {foreignKey: "spotId"});
  };
  return Image;
};
