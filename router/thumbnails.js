const Thumbnail = {};
const Thumbnails = require("../Models/Thumbnails");

Thumbnail.getTables = async (req, res) => {

    try {
        // Slect * from table;
        // select name from table;
        // let tables = await 
        Thumbnails.findAll().then(thumbnails => {
            const resObj = thumbnails.map(thumbnail => {


                //tidy up the thumbnail data
                return Object.assign(
                    {},
                    {
                        thumbnail_id: thumbnail.id,
                        url: thumbnail.url,
                        "video_id": thumbnail["video_id"],
                       

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

Thumbnail.createTable = async (req, res) => {

    try {
        const { body } = req;
        let thumbnail = {
            url: body.url,
          
            "video_id": body["video_id"],

        }
        let table = await Thumbnails.create(thumbnail);
        res.send(table);
    } catch (error) {
        console.log(error);
    }
}

Thumbnail.updateTable = async (req, res) => {
    try {
        const { body, params } = req;
        // update table set name = "Aditya" where id = 3 and name = "amit";
        let table = await Thumbnails.update({ url: body.url }, { where: { id: params.id } });
        return res.send(table);
    } catch (error) {
        console.log(error);
    }
}

Thumbnail.deleteTable = async (req, res) => {
    try {
        const { params } = req;
        await Thumbnails.destroy({ where: { id: params.id } });
        return res.send("Deleted successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = Thumbnail;
