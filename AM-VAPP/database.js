const Sequelize = require("sequelize");
// const {Table,Customers} = require('./Models/Table')
 
const db = new Sequelize("amvapp", "postgres", "test123", {
 host: "localhost",
 dialect: "postgres"
});
 
// db.authenticate()
// .then(() => {
//  console.log("DB connection is established");
// })
module.exports = db;