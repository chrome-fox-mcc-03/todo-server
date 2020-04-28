const errorHandling = (err, req, res, next) => {
    console.log(err);
    if (err.name == "SequelizeValidationError") {
        let error = err.errors.map(el => el.message);
        res.status(400).json({ error: error[0] });
    } else if (err.name == "JsonWebTokenError") { //auth error
        res.status(401).json({ error: err.message });
    } else {
        res.status(err.status || 500).json({ error: err.message } || { error: "Internal Server Error" } );
    }
}

module.exports = errorHandling;
