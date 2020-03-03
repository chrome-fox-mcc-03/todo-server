module.exports = function(err, req, res, next) {
    if (err.name === 'SequelizeValidationError') {
        const errors = err.errors.map(el => el.message)
        res.status(500).json(errors)
    } else if (err.name === 'jsonwebtokenerror') {

    } else {
        res.status(err.status).json(err.message)
    }
}