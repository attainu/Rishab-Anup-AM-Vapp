const express = require("express");
const app = express();
const cors = require('cors')
const db = require("./database")
const router = require("./router");

app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.json());
app.use("/", router);


app.listen(6060, () => {
    db.authenticate()
        .then(() => {
            console.log("DB connection is established on port ", 6060);
        })
})

module.exports = app;

