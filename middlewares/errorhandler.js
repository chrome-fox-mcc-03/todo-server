module.exports = function(err, req, res, next) {
    if (err.name === 'SequelizeValidationError') {
        const message = err.errors.map(el => el.message)
        res.status(400).json(message)
    } else if (err.name === 'JsonWebTokenError') {
        res.status(401).json('Login required')//?
    } else {
        res.status(err.status || 500).json(err.message || 'Internal server error')
    }
}