const Sequelize = require("sequelize");
// const {Table,Customers} = require('./Models/Table')
 
// const db = new Sequelize("amvapp", "postgres", "a891330011RT1", {
//  host: "localhost",
//  dialect: "postgres"
// });

const db = new Sequelize("	postgres://dflstmnf:tO8ceq15IomXeEyd8YFjOZsqKqrTNVHE@arjuna.db.elephantsql.com:5432/dflstmnf");
 
// db.authenticate()
// .then(() => {
//  console.log("DB connection is established");
// })
module.exports = db;