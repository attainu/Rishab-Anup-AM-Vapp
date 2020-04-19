const db = require("../database");
const Sequelize = require("sequelize");

const Thumbnails = db.define("thumbnails", {
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
  video_id:{
    type:Sequelize.INTEGER,
    references: {         
      model: 'videos',
      key: 'id'
    }
  } 
 
}, 
 {
  timestamps: false,
  underscored: true
});


db.sync()

module.exports = Thumbnails


