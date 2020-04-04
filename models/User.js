const Sequelize = require('sequelize')
const db = require('../database/db.js')

// module.exports = db.sequelize.define(
//   'user',
let User = db.define('user',

{
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)
db.sync().then(res => {
  console.log("User DB has been created", res);
})
 
module.exports = User;