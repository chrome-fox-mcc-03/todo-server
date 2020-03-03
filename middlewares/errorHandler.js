const { Sequelize } = require('../models');

function errHandler(err, req, res, next) {
    if (err instanceof Sequelize.EmptyResultError) {
        res.status(404).json({
            error: err.message
        });
    } else if (err instanceof Sequelize.ValidationError) {
        let msg = err.errors.map(item => item.message)
        res.status(400).json({
            error: msg
        });
    } else if (err instanceof Error) {
        res.status(err.code).json({
            error: err.message
        });
    }
    else {
        //500 generic error?
        console.log(err);
        res.status(500).json({
            error: "Internal server error"
        })
    }
}

module.exports = errHandler;