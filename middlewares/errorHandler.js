module.exports = function errorHandler(err, req, res, next) {

    if(err.name === "SequelizeUniqueConstraintError") {
        let message = err.errors.map(el => el.message)
        res.status(400).json({message})
    }

    else if(err.name === "JsonWebTokenError") {
        let message = "Please login first"
        res.status(401).json({message})
    }

    else {
        let message = err.message
        res.status(err.status || 500).json({ message } || "Internal server error")
    }

}