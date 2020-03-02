function errorHandler(err, req, res, next) {
    console.log(err)


    let statusCode = 500
    let msg = 'Internal Server Error'

    if (err.name === 'SequelizeValidationError') {

        statusCode = 400
        let errors = []

        err.errors.forEach(error => {
            errors.push(error.name)
        });
        res.status(statusCode).json({ errors })
    } else if (err.name === '404NotFound') {
        statusCode = 404
        msg = 'Data not found'
        res.status(statusCode).json({ msg })
    } else {
        res.status(statusCode).json({ msg })
    }


}

module.exports = errorHandler