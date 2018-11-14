const User = require('../models/users.models');
const verifyToken = require('../services/verifyToken');
module.exports = {
    verify: async (req, res, next) => {


        try {
            const users = await User.find({ _id: req.body.user });

            if (users.length === 1) {
                const user = users[0];
                const info = verifyToken.verify(user.token);
                if (info.value._id === req.body.user && info.value.password === req.body.password) {
                    next();
                }
            }
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
}