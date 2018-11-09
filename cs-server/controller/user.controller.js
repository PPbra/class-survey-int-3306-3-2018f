module.exports = {
    test: (req, res) => {
        const response = {
            message: 'Hello World!'
        }
        res.end(JSON.stringify(response));
    }

}