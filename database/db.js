const Sequelize = require("sequelize");
 
const db = new Sequelize("media", "postgres", "test123", {
 host: "localhost",
 dialect: "postgres"
});
 
db.authenticate()
.then(() => {
 console.log("DB connection is established");
})
 
module.exports = db;
