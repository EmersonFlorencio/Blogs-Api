const categoriesModel = (sequelize, DataTypes) => {
  const categoriesTable = sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  });
  return categoriesTable;
};

module.exports = categoriesModel;
