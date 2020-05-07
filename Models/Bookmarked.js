const db = require("../database");
const Sequelize = require("sequelize");

const Bookmarked = db.define("bookmarked", {
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
    video_id: {
        type: Sequelize.INTEGER,
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

module.exports = Bookmarked


