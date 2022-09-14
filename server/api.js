
module.exports = function (app, db) {

    app.get('/api/test', function (req, res) {
        res.json({
            name: "OwSoto"
        })
    })
}