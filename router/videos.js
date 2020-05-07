const Video = {};
const Thumbnails = require("../Models/Thumbnails");
const Videos = require("../Models/Videos")
const Avatars = require("../Models/Avatars")
const Subscribed = require("../Models/Subscribed")
const Subscribers = require("../Models/Subscribers")
const Comments = require("../Models/Comments")
const Users = require("../Models/Users")
Video.getTables = async (req, res) => {

    try {
        // Slect * from table;
        // select name from table;
        // let tables = await 
        Videos.findAll({
            include: [
                
                {
                    model: Comments,
                    include: [
                        {
                          model: Users
                        }
                    ]
                },
                {
                    model: Users,
                    include:[
                        {
                            model:Videos
                        }
                    ]
                   
                },
            ]
        }).then(videos => {
            const resObj = videos.map(video => {


                //tidy up the video data
                return Object.assign(
                    {},
                    {
                        video_id: video.id,
                        title: video.title,
                        url: video.url,
                        "user_id": video["user_id"],
                        anime:video.anime,
                        views:video.views,
                        thumbnail:video.thumbnail,
                        comments:video.comments,
                        users:video.user,
                        createdAt:video["created_at"]

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

Video.findVideo = async (req, res) => {
    try {
        const { body  } = req;
        let table = await Videos.findOne({ where: { id: body.id}  ,include: [
                
            {
                model: Comments,
                include: [
                    {
                      model: Users
                    }
                ]
            },
            {
                model: Users,
                include:[
                    {
                        model:Videos,
                        include:[
                            {
                                model:Users
                            }
                        ]
                    },
                    {
                        model:Subscribers
                    }
                ]
               
            },
        ]})
        return res.send({
            data:table
        })
       


    } catch (error) {
        console.log("user table---->", error)

    }
}

Video.createTable = async (req, res) => {

    try {
        const { body } = req;
        let video = {
           
            title: body.title,
            url: body.url,
            anime:body.anime,
            thumbnail:body.thumbnail,
            "user_id": body["user_id"],

        }
        let table = await Videos.create(video);
        res.send({
            status:true,
            data:table
        });
    } catch (error) {
        console.log(error);
        res.send({
            status:false,
            data:error.errors[0].message
        });
    }
}

Video.updateTable = async (req, res) => {
    try {
        const { body, params } = req;
        // update table set name = "Aditya" where id = 3 and name = "amit";
        let table = await Videos.update({ userName: body.userName }, { where: { id: params.id } });
        return res.send(table);
    } catch (error) {
        console.log(error);
    }
}

Video.deleteTable = async (req, res) => {
    try {
        const { params } = req;
        await Videos.destroy({ where: { id: params.id } });
        return res.send("Deleted successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = Video;
