const db = require("../database");
const Sequelize = require("sequelize");

const Subscribers = db.define("subscribers", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  others_id: {
    type: Sequelize.INTEGER,
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

module.exports = Subscribers


