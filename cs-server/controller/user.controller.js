const User = require('../models/users.models');

module.exports = {
    test: (req, res) => {
        const response = {
            message: 'Hello World!'
        }
        const tmp = User.find({ name: "Ngo Minh Phuong" })
            .then(res => {
                console.log(res);
            })
        console.log(tmp);
        res.end(JSON.stringify(response));
    }
}