function errorHandler(err, req, res, next) {

    let statusCode = 500
    let msg = 'Internal Server Error'

    if (err.name === 'SequelizeValidationError') {

        statusCode = 400
        let errors = []

        err.errors.forEach(error => {
            errors.push(error.message)
        });
        res.status(statusCode).json({ errors })
    } else if (err.name === '404NotFound') {
        statusCode = 404
        msg = 'Data not found'
        res.status(statusCode).json({ error: msg })
    } else if (err.name === 'Unauthorized') {
        statusCode = 401
        msg = 'Unauthorized'
        res.status(statusCode).json({ error: msg })
    } else {
        res.status(statusCode).json({ error: msg })
    }


}

module.exports = errorHandler