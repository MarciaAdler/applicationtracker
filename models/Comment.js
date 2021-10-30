// creating comment model

module.exports = function (sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  Comment.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Comment.belongsTo(models.BlogPost, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Comment;
};
