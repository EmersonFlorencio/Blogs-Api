const postCategoryModel = (sequelize, DataTypes) => {
  const postCategoryTable = sequelize.define("PostCategory", {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "blog_posts",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  });

  postCategoryTable.associate = (models) => {
    models.categories.belongsToMany(models.blog_posts, {
      as: "BlogPost",
      through: PostCategory,
      otherKey: 'post_id',
      foreignKey: 'category_id',
    });
  models.blog_posts.belongsToMany(models.categories, {
    as: "categories",
    through: PostCategory,
    otherKey: 'category_id',
    foreignKey: 'post_id',
  });

  };
  return postCategoryTable;
};

module.exports = postCategoryModel;