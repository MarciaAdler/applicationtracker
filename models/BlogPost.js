// creating blog post model

module.exports = function (sequelize, DataTypes) {
  var BlogPost = sequelize.define("BlogPost", {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  BlogPost.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    BlogPost.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return BlogPost;
};
