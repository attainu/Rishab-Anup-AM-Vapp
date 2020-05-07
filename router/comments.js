const Comment = {};
const Comments = require("../Models/Comments");
const Users = require("../Models/Users")

Comment.getTables = async (req, res) => {

    try {
        // Slect * from table;
        // select name from table;
        // let tables = await 
        Comments.findAll({
            include: [
                {
                    model: Users
                }
            ]
        }).then(comments => {
            const resObj = comments.map(comment => {
               

                //tidy up the comment data
                return Object.assign(
                    {},
                    {
                        subscriber_id: comment.id,
                        "video_id": comment["video_id"],
                        "user_id": comment["user_id"],
                        user: comment.user


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

Comment.createTable = async (req, res) => {

    try {
        const { body } = req;
        let comment = {
            text: body.text,
            "user_id": body["user_id"],
            "video_id": body["video_id"]

        }
        let table = await Comments.create(comment);
        res.send(table);
    } catch (error) {
        console.log(error);
    }
}



Comment.deleteTable = async (req, res) => {
    try {
        const { params } = req;
        await Comments.destroy({ where: { id: params.id } });
        return res.send("Deleted successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = Comment;
