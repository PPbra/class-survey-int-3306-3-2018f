const User = require('../models/users.models');
module.exports = {
    getClasses: async (req, res) => {
        const { _id, role_id } = req.body;
        const student = await User.findById(_id);
        if (student && student.role_id === role_id && role_id === 3) {
            const classes = student.class;
            res.send({
                success: true,
                data: {
                    class: classes
                }
            })
        }
        else {
            res.send({
                success: false,
                message: "User not found or role id is not correct!"
            })
        }
    }
}
