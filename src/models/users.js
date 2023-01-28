const userModel = (sequelize, DataTypes) => {
 const userTable = sequelize.define('user', {
   id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
   },
   display_name: DataTypes.STRING,
   email: DataTypes.STRING,
   password: DataTypes.STRING,
   image: DataTypes.STRING
 }, {
  tableName: 'users',
  underscored: true,
  timestamps: false,
 })
 
 return userTable;
};

module.exports = userModel;
