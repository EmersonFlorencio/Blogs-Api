const postCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "blog_posts",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },{
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories'
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: "BlogPosts",
      through: PostCategory,
      otherKey: 'post_id',
      foreignKey: 'category_id',
    });
  models.BlogPost.belongsToMany(models.Category, {
    as: "categories",
    through: PostCategory,
    otherKey: 'category_id',
    foreignKey: 'post_id',
  });

  };
  return PostCategory;
};

module.exports = postCategoryModel;