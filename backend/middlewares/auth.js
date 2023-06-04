//middlewares

const { decodeToken } = require("../helpers/helper");
const { User,Teacher } = require("../models/index");

const authentication = async (req, response, next) => {
    try {
        const { access_token } = req.headers;
   
        if (!access_token) {
            throw {
                name: "InvalidToken",
            };
        }

        const data = decodeToken(access_token);
        console.log(data.id,"<<<<<<<<<<<<<<<<<,,")
        const user = await User.findOne({
            where: {
                id: data.id,
            },
        });

        if (!user) {
            throw {
                name: "InvalidToken",
            };
        }

        req.user = user;
        next();
    } catch (err) {
        console.log(err,"AUTH");
        response.status(401).json(err)
    }
};



const authorization = async (req, response, next) => {
    try {

    } catch (error) {

    }
};





module.exports = {
    authentication,
    authorization,
};
