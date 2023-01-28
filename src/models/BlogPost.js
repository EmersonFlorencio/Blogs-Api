const blogPostsModel = (sequelize, DataTypes) => {
  
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
     },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id:{
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }, 
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, 
    BlogPosts.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: "id",
      })
  });
  return BlogPost;
};

module.exports = blogPostsModel;
