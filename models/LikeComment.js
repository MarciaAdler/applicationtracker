const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  const LikeComment = sequelize.define("LikePost", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: "Comments",
        key: "id",
      },
    },
  });
  return LikeComment;
};
