var jwt = require('jsonwebtoken');

const User = {};
const Users = require("../Models/Users");
const Videos = require("../Models/Videos")
const Avatars = require("../Models/Avatars")
const Subscribed = require("../Models/Subscribed")
const Subscribers = require("../Models/Subscribers")
const Comments = require("../Models/Comments")
const Bookmarked = require("../Models/Bookmarked")
User.getTables = async (req, res) => {

    try {
        // Slect * from table;
        // select name from table;
        // let tables = await 
        Users.findAll({
            include: [
                {
                    model: Subscribers
                },
                {
                    model: Videos
                },
                {
                    model: Subscribers
                },
                {
                    model: Subscribed,
                    include: [{
                        model: Users, as: "others",
                    }
                    ]
                },
                {
                    model: Bookmarked,
                    include: [{
                        model: Videos
                    }
                    ]
                }

            ]
        }).then(users => {
            const resObj = users.map(user => {
                console.log("logged", user)


                //tidy up the user data
                return Object.assign(
                    {},
                    {
                        user_id: user.id,
                        userName: user.userName,
                        email: user.email,
                        name: user.name,
                        avatar: user.avatar,
                        subscribers: user.subscribers,
                        videos: user.videos,
                        Subscribed: user.subscribeds,
                        Bookmarked: user.bookmarkeds


                    })
            }
            )
            res.json(resObj)
        });


        // res.send(tables);
    } catch (error) {
        console.log(error);
    }

}

User.findTable = async (req, res) => {
    try {
        const { body } = req;
        let table = await Users.findOne({ where: { userName: body.userName, password: body.password } })
        if (table) {
            jwt.sign({ table }, "somethingSecret", { expiresIn: '1h' }, (err, token) => {

                if (err) {
                    console.log(err)
                    res.send({
                        error: err
                    })
                }
                else {
                    res.send({
                        status: true,
                        data: table,
                        token: token  
                    })

                    console.log(token);

                }


            });
        }
        else {
            res.send({
                status: false,
            })
        }


    } catch (error) {
        console.log("user table---->", error)

    }
}

User.verifyTable = async (req, res) => {

    try {
        const token = req.headers.token;
        jwt.verify(token, 'somethingSecret', (err, decoded) => {
            if (err) {
                res.send({
                    error: err
                })
            }
            else {
                let { userName } = decoded.table
                Users.findOne({
                    where: { userName: userName },
                    include: [
                        {
                            model: Subscribers
                        },
                        {
                            model: Videos
                        },
                        {
                            model: Subscribers
                        },
                        {
                            model: Subscribed,
                            include: [{
                                model: Users, as: "others",
                            }
                            ]
                        },
                        {
                            model: Bookmarked,
                            include: [{
                                model: Videos
                            }
                            ]
                        }

                    ]
                }).then(resp => {

                    res.send({

                        data: resp
                    })

                })

            }

        });

    } catch (error) {

    }


}

User.createTable = async (req, res) => {

    try {
        const { body } = req;
        let user = {
            name: body.name,
            userName: body.userName,
            email: body.email,
            password: body.password,
            avatar: body.avatar

        }
        let table = await Users.create(user);
        if (table) {
            jwt.sign({ table }, "somethingSecret", { expiresIn: '1h' }, (err, token) => {

                if (err) {

                    res.send({
                        status: "error",
                        error: err
                    })
                }
                else {
                    res.send({
                        status: true,
                        data: table,
                        token: token
                    })

                    console.log(token);

                }


            });
        }
        else {
            res.send({
                status: false,
            })
        }

    } catch (error) {

        res.send({
            status: false,
            data: error.errors[0].message
        });

    }
}

User.updateTable = async (req, res) => {
    try {
        const { body, params } = req;
        // update table set name = "Aditya" where id = 3 and name = "amit";
        let table = await Users.update({ userName: body.userName }, { where: { id: params.id } });
        return res.send(table);
    } catch (error) {
        console.log(error);
    }
}

User.deleteTable = async (req, res) => {
    try {
        const { params } = req;
        await Users.destroy({ where: { id: params.id } });
        return res.send("Deleted successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = User;
