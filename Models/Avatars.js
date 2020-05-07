const db = require("../database");
const Sequelize = require("sequelize");

const Avatars = db.define("avatars", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull:false
  },
  user_id:{
    type:Sequelize.INTEGER,
    references: {         
      model: 'users',
      key: 'id'
    }
  } 
 
}, 
 {
  timestamps: false,
  underscored: true
});


db.sync()

module.exports = Avatars


