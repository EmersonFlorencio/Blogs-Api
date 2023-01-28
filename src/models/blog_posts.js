const blogPostsModel = (sequelize, DataTypes) => {
  
  const blogPostsTable = sequelize.define('blog_posts', {
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
    blogPostsTable.associate = (models) => {
      blog_posts.belongsTo(models.users, {
        foreignKey: "id",
      })
  });
  return blogPostsTable;
};

module.exports = blogPostsModel;
