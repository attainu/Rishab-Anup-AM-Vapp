const db = require("../database");
const Sequelize = require("sequelize");

const Comments = db.define("comments", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull: false
  },
  text: {
    type: Sequelize.STRING,
    allowNull:false
  },
  video_id:{
    type:Sequelize.INTEGER,
    references: {         
      model: 'videos',
      key: 'id'
    }
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
  timestamps: false,
  underscored: true
});


db.sync()

module.exports = Comments



