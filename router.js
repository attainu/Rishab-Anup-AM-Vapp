const express = require("express");
const router = express.Router();

//Importing Routes
const User = require("./router/users")
const Video = require("./router/videos")
const Thumbnail = require("./router/thumbnails")
const Subscriber = require("./router/subscribers");
const SubscribedUser = require("./router/subscribed")
const Comment = require("./router/comments")
const Bookmark = require("./router/bookmarked")

//Importing Tables
const Users = require("./Models/Users")
const Videos = require("./Models/Videos")
const Thumbnails = require("./Models/Thumbnails")
const Avatars = require("./Models/Avatars")
const Subscribers = require("./Models/Subscribers")
const Subscribed = require("./Models/Subscribed")
const Comments = require("./Models/Comments")
const Bookmarked = require("./Models/Bookmarked")


//Joining Table
Videos.belongsTo(Users);
// Avatars.belongsTo(Users);
Subscribed.belongsTo(Users , {as:"others"});
Subscribers.belongsTo(Users , {as:"others"});
Thumbnails.belongsTo(Videos);
Comments.belongsTo(Videos)
Videos.hasMany(Thumbnails)
Videos.hasMany(Comments)
Users.hasMany(Videos);
Users.hasMany(Bookmarked)
Users.hasMany(Subscribers);
Users.hasMany(Subscribed);
Comments.belongsTo(Users)
Bookmarked.belongsTo(Videos)

// Users.hasOne(Avatars);
// Videos.hasOne(Thumbnails);



//User Routes
router.post("/user", User.createTable)
router.post("/user/find", User.findTable)
router.get("/user", User.getTables);
router.put("/user/:id", User.updateTable);
router.delete("/user/:id", User.deleteTable)
router.post("/user/verify" , User.verifyTable)
router.post("/user/getone" , User.findOneUser )

//Videos Routes
router.post("/video", Video.createTable)
router.post("/video/find", Video.findVideo)
router.get("/video", Video.getTables);
router.put("/video/:id", Video.updateTable);
router.delete("/video/:id", Video.deleteTable)

//Thumbnails Routes

router.post("/thumbnail", Thumbnail.createTable)
router.get("/thumbnail", Thumbnail.getTables);
router.put("/thumbnail/:id", Thumbnail.updateTable);
router.delete("/thumbnail/:id", Thumbnail.deleteTable)

//Subscribers Routes

router.post("/subscriber", Subscriber.createTable)
router.get("/subscriber", Subscriber.getTables);

router.delete("/subscriber/:id", Subscriber.deleteTable)

//Subscribed Routes

router.post("/subscribed", SubscribedUser.createTable)
router.get("/subscribed", SubscribedUser.getTables);

router.delete("/subscribed/:id", SubscribedUser.deleteTable)

//Comments Routes

router.post("/comment", Comment.createTable)
router.get("/comment", Comment.getTables);
router.delete("/comment/:id", Comment.deleteTable)

//Bookmark Routes

router.post("/bookmarked", Bookmark.createTable)
router.get("/bookmarked", Bookmark.getTables);
router.delete("/bookmarked/:id", Bookmark.deleteTable)



module.exports = router;