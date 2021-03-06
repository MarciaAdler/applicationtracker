module.exports = function (sequelize, DataTypes) {
  var Search = sequelize.define("Search", {
    searchName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    active: { type: DataTypes.BOOLEAN, defaultValue: true },
  });
  Search.associate = function (models) {
    Search.hasMany(models.Application, {
      foreignKey: "SearchId",
    });
  };
  Search.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Search.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Search;
};
