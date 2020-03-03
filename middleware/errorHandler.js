function errorHandler (err, req, res, next) {
    let message; 
    switch (err.name) {
        case "SequelizeDatabaseError":
            message = "Database Error!"
            res.status(500).json([message])
            break;
        case "SequelizeUniqueConstraintError":
            message = err.errors.map(el => el.message)
            res.status(500).json(message)
            break;
        case "SequelizeValidationError":
            message = err.errors.map(el => el.message)
            res.status(400).json(message)
            break;
        case "noIdFound":
            message = err.errors.map(el => el.message)
            res.status(404).json(message)
            break;
        case "errorLogin":
            message = err.errors.map(el => el.message)
            res.status(400).json(message)
            break;
        case "JsonWebTokenError":
            message = "You need to login first!"
            res.status(401).json([message])
        case "authorizationError":
            message = err.errors.map(el => el.message)
            res.status(401).json(message)
            break;
        default:
            res.status(500).json(err)
            break;
    }
}

module.exports = errorHandler