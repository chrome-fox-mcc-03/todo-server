"use strict"

module.exports = function(err, req, res, next){
    console.log(err)
    switch(err.name){
        case "Error":
            if (err.message === 'Not found') res.status(404).json({error:'ERROR 404', msg:'Data not found'})
            break
        case "EmailError":
            res.status(500).json({msg:'Server error!', error:'ERROR 500' })
            break
        case "SequelizeConnectionError":
            res.status(500).json({msg:'Server error!', error:'ERROR 500' })
            break
        case "SequelizeValidationError":
            res.status(400).json({error:`ERROR 400 Bad Request`, msg: `${err.message}`})
            break
        case "SequelizeDatabaseError":
            res.status(400).json({error:`ERROR 400 Bad Request`, msg: `${err.message}`})
            break
        case "LoginError":
            res.status(400).json({error:`ERROR 400 Bad Request`, msg: `${err.message}`})
            break
        case "SequelizeUniqueConstraintError":
            res.status(400).json({error:`ERROR 400 Bad Request`, msg: `${err.message}`})
            break
        case "Unauthorized":
            res.status(401).json({error:`ERROR 401 Unauthorized`, msg:`${err.message}`})
    }
}