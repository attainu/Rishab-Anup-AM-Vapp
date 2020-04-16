const db = require("../database");
const Sequelize = require("sequelize");

const Videos = db.define("videos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull: false
  },
  anime: {
    type: Sequelize.STRING,
    allowNull:false,
    validate:{
      
      notEmpty: true
    }
  },
  
  title: {
    type: Sequelize.STRING,
    allowNull:false,
    validate:{
      
      notEmpty: true
    }
  },
  url: {
    type: Sequelize.STRING,
    allowNull:false,
    validate:{
      notEmpty: true
    }
  },
  views: {
    type: Sequelize.INTEGER,
    defaultValue: '0'
  },
  thumbnail: {
    type: Sequelize.STRING, 
    allowNull:false
  },
  user_id:{
    type:Sequelize.INTEGER,
    references: {         
      model: 'users',
      key: 'id'
    }
  },
 
}, 
 {
  timestamps: true,
  underscored: true
});


db.sync()

module.exports = Videos



