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

  return Application;
};
