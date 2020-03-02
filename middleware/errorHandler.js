function errorHandler (err, req, res, next) {
    switch (err.name) {
        case "SequelizeDatabaseError":
            res.status(500).json(err)
            break;
        case "SequelizeValidationError":
            res.status(400).json(err)
            break;
        case "noIdFound":
            res.status(404).json(err)
            break;
        default:
            break;
    }
}

module.exports = errorHandler