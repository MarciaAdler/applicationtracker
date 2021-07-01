// creating application model

module.exports = function (sequelize, DataTypes) {
  var Application = sequelize.define("Application", {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    applicationLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateApplied: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Applied",
    },
  });
  Application.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Application.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    }),
      Application.belongsTo(models.Search, {
        foreignKey: {
          allowNull: false,
        },
      });
  };
  return Application;
};
