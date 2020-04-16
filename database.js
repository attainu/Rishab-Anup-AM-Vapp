const Sequelize = require("sequelize");
// const {Table,Customers} = require('./Models/Table')
 
const db = new Sequelize("amvapp", "postgres", "a891330011RT1", {
 host: "localhost",
 dialect: "postgres"
});
 
// db.authenticate()
// .then(() => {
//  console.log("DB connection is established");
// })
module.exports = db;