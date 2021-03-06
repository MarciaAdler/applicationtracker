// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      // The email cannot be null, and must be a proper email before creation
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      // username cannot be null
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // The password cannot be null
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // The user role cannot be null
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Job Seeker",
      },
      active: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "active",
      },
      company: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      file: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      primaryRole: {
        type: DataTypes.STRING,
      },
      bio: {
        type: DataTypes.TEXT,
      },
      website: {
        type: DataTypes.STRING,
      },
      linkedIn: {
        type: DataTypes.STRING,
      },
      twitter: {
        type: DataTypes.STRING,
      },
      instagram: {
        type: DataTypes.STRING,
      },
      otherLink: {
        type: DataTypes.STRING,
      },
      yearsExperience: {
        type: DataTypes.DECIMAL(10, 1),
        defaultValue: 0,
      },
    },
    {}
  );

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  User.addHook("beforeUpdate", function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  User.associate = function (models) {
    User.hasMany(models.Search, {
      foreignKey: "UserId",
    });
  };
  User.associate = function (models) {
    User.hasMany(models.Application, {
      foreignKey: "UserId",
    });
  };
  return User;
};
