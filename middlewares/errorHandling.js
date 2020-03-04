let error

function errorHandler(err, req, res, next) {
    console.log(err.name);
    console.log(err);

    if(err.name === "SequelizeValidationError") {
        error = err.errors.map(el => {
            el.message
        })
        res.status(400).json(error)
    } else if (err.name === "JsonWebTokenError") {
        res.status(401).json("Unauthorized Access")
    } else if (err.name === "SequelizeUniqueConstraintError") {
        // res.status(400).json(err)
        // error = err.errors.map(el => {
        //     el.message
        // })
        // console.log(error);
        // console.log(`error's message`)
        // console.log(err.errors[0].message);
        res.status(400).json(err.errors[0].message)
    } else {
        res.status(err.status || 500).json(err.message || "INTERNAL SERVER ERROR")
    }
}

module.exports = errorHandler