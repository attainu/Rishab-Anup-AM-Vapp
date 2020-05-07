const SubscribedUsers = {};
const Subscribed = require("../Models/Subscribed");
const Users = require("../Models/Users")
const Videos = require("../Models/Videos")

SubscribedUsers.getTables = async (req, res) => {

    try {
        // Slect * from table;
        // select name from table;
        // let tables = await 
        Subscribed.findAll({
            include: [
                {
                    model: Users, as: "others",
                    include: [{
                        model: Videos
                    }
                    ]
                },


            ]
        }).then(subscribedUsers => {
            const resObj = subscribedUsers.map(subscribed => {

                //tidy up the subscribed data
                return Object.assign(
                    {},
                    {
                        subscriber_id: subscribed.id,
                        "others_id": subscribed["others_id"],
                        "user_id": subscribed["user_id"],
                         others:subscribed.others


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

SubscribedUsers.createTable = async (req, res) => {

    try {
        const { body } = req;
        let subscriber = {
            "user_id": body["user_id"],
            "others_id": body["others_id"],
        }
        let table = await Subscribed.create(subscriber);
        res.send(table);
    } catch (error) {
        console.log(error);
    }
}



SubscribedUsers.deleteTable = async (req, res) => {
    try {
        const { params } = req;
        await Subscribed.destroy({ where: { id: params.id } });
        return res.send("Deleted successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = SubscribedUsers;
