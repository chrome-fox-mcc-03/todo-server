module.exports = function (err, req, res, next) {
    if (err.name == 'SequelizeDatabaseError') {
        res.status(500).json('Internal Error')
    } else {
        res.status(err.status).json(err.msg.err)
    }


}