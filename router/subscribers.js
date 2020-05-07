const Subscriber = {};
const Subscribers = require("../Models/Subscribers");
const Users = require("../Models/Users")
const Videos = require("../Models/Videos")

Subscriber.getTables = async (req, res) => {

    try {
        // Slect * from table;
        // select name from table;
        // let tables = await 
        Subscribers.findAll({
            include: [
                {
                    model: Users , as: "others",
                    include: [{
                        model: Videos
                    }
                    ]
                },
               
               
            ]
        }).then(subscribers => {
            const resObj = subscribers.map(subscriber => {
                console.log("subscribers" , subscriber)

                //tidy up the subscriber data
                return Object.assign(
                    {},
                    {
                        subscriber_id: subscriber.id,
                        "others_id":subscriber["others_id"],
                        "user_id": subscriber["user_id"],
                        others:subscriber.others
                       

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

Subscriber.createTable = async (req, res) => {

    try {
        const { body } = req;
        let subscriber = {
            "user_id": body["user_id"],
            "others_id":body["others_id"]

        }
        let table = await Subscribers.create(subscriber);
        res.send(table);
    } catch (error) {
        console.log(error);
    }
}



Subscriber.deleteTable = async (req, res) => {
    try {
        const { params } = req;
        await Subscribers.destroy({ where: { id: params.id } });
        return res.send("Deleted successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = Subscriber;
