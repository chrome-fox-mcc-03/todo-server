let error
const { Sequelize } = require("../models")

function errorHandler(err, req, res, next) {
    console.log("THE MAIN ERROR IS \n");
    console.log(err);
    console.log(`WHAT ERROR DO WE HAVE? \n`);
    console.log(err.name);
    console.log("THE ERROR MESSAGE IS \n");
    console.log(err.message);
    


    // if(err.name === "SequelizeValidationError") {
    //     error = err.errors.map(el => {
    //         el.message
    //     })
    //     res.status(400).json(error)
    // } else if (err.name === "JsonWebTokenError") {
    //     res.status(500).json({error: err.name, message: "INVALID TOKEN"})
    // } else if (err.name === "SequelizeUniqueConstraintError") {
    //     res.status(400).json({error: err.name, message: err.errors[0].message})
    // } else if (err.name === "TypeError")  {
    //     res.status(404).json({error: err.name, message: "ENTRY NOT FOUND"})
    // }
    // else {
    //     res.status(err.status || 500).json({
    //         error: err.name || "INTERNAL SERVER ERROR",
    //         message: err.message 
    //     })
    //         // err.message || "INTERNAL SERVER ERROR"
            
    // }

    if(err instanceof Sequelize.EmptyResultError) {
        res.status(404).json({
            message: err.message
        })
    } 
    else if (err instanceof Sequelize.ValidationError) {
        let msg = err.errors.map(el => el.message)
        res.status(400).json({
            message: msg
        })
    }
    else if (err instanceof Error) {
        res.status(err.code).json({message: err.message})
    } else {
        res.status(err.status || 500).json({message: err.message || "INTERNAL SERVER ERROR"})
    }
}

module.exports = errorHandler