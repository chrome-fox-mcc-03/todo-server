const { Sequelize } = require('../models');

function myErrHandler(err, req, res, next) {
    if (err instanceof Sequelize.EmptyResultError) {
        res.status(404).json({
            error: err.message
        });
    } else if (err instanceof Sequelize.ValidationError) {
        let msg = err.errors.map(item => item.message)
        res.status(400).json({
            error: msg
        });
    }
    else {
        //500 generic error?
        res.status(500).json({
            error: err.message
        })
    }
}

module.exports = myErrHandler;