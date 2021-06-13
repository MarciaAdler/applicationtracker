module.exports = function (sequelize, DataTypes) {
  var Search = sequelize.define("Search", {
    searchName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Search.associate = function (models) {
    Search.hasMany(models.Application, {
      foreignKey: "SearchId",
    });
  };

  return Search;
};
