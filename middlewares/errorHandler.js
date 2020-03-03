"use strict"

module.exports = function(err, req, res, next){
    switch(err.name){
        case "Error":
            if (err.message === 'Not found') res.status(404).send('ERROR 404: Data not found')
            break
        case "SequelizeConnectionError":
            res.status(500).send('ERROR 500: Server error!')
            break
        case "SequelizeValidationError":
        case "SequelizeDatabaseError":
        case "LoginError":
            res.status(400).send(`ERROR 400 Bad Request: ${err.message}`)
            break
        case "SequelizeUniqueConstraintError":
            res.status(400).send(`ERROR 400 Bad Request: ${err.message}`)
            break
        case "Unauthorized":
            res.status(401).send(`ERROR 401 Bad Request: ${err.message}`)

    }
}