const Bookmark = {};
const Bookmarked = require("../Models/Bookmarked");
const Videos = require("../Models/Videos")

Bookmark.getTables = async (req, res) => {

    try {
        // Slect * from table;
        // select name from table;
        // let tables = await 
        Bookmarked.findAll({
            include: [
                {
                    model: Videos
                }
            ]
        }).then(bookmarks => {
            const resObj = bookmarks.map(bookmark => {


                //tidy up the bookmark data
                return Object.assign(
                    {},
                    {
                        "bookmarked_id": bookmark.id,
                        "video_id": bookmark["video_id"],
                        "user_id": bookmark["user_id"],
                         video: bookmark.video


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

Bookmark.createTable = async (req, res) => {

    try {
        const { body } = req;
        let bookmarked = {
           
            "user_id": body["user_id"],
            "video_id": body["video_id"]

        }
        let table = await Bookmarked.create(bookmarked);
        res.send(table);
    } catch (error) {
        console.log(error);
    }
}



Bookmark.deleteTable = async (req, res) => {
    try {
        const { params } = req;
        await Bookmarked.destroy({ where: { id: params.id } });
        return res.send("Deleted successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = Bookmark;
