'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs'); // for validatePassword method below
const { user } = require("pg/lib/defaults");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    email: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       len: [3, 256]
     }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    }
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword']}
      },
      loginUser: {
        attributes: {}
      }
    }
  });
  // instance methods:
  // toSafeObject will return an object with ONLY the User instance info safe enough to save to JWT
  User.prototype.toSafeObject = function() {
    const { id, username, email } = this; // Context will be the User instace
    return { id, username, email };
  }
  // accepts password and returns true if a match with User's hashedPassword
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  //
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  // User.login method searches for user with specified credential, validates password
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });
    // calls validatePassword for validation check. Only returns safe info
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  //
  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  User.associate = function(models) {
    User.hasMany(models.Spot, {foreignKey: "userId", hooks: true, onDelete: "CASCADE"});
    User.hasMany(models.Booking, {foreignKey: "userId"});
    User.hasMany(models.Review, {foreignKey: "userId"});
  };
  return User;
};
