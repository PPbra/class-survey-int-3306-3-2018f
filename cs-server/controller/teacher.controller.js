const User = require('../models/users.models');
module.exports = {
    getClasses: async (req, res) => {
        const { _id, role_id } = req.body;
        const teacher = await User.findById(_id);
        if (role_id === 2 && teacher && teacher.role_id === role_id) {
            const classes = teacher.class;
            res.send({
                success: true,
                data: {
                    class: classes
                }
            })
        } else {
            res.send({
                success: false,
                message: "User not found or role id is not correct!"
            })
        }
    }
}