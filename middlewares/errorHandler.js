module.exports = function (err, req, res, next) {

    switch(err.name) {
        case "SequelizeValidationError":
        const error = err.errors.map(el => {
            el.message
        })
        res.status(400).json({
            error
        });
        break;
        case "not found":
        res.status(err.status).json({
            error: err.message
        })
        break;
        case "unauthorized":
        res.status(err.status).json({
            error: err.message
        })
        break;
        case "bad request":
        res.status(err.status).json({
            error: err.message
        })
        break;
        default:
        res.status(err.status || 500).json({
            error: err.message || "internal server error"
        })
        break;
    }   
}