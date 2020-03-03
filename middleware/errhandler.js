module.exports = function(err, req, res, next) {
        if(err) {
            switch(err.name) {
                case "SequelizeUniqueConstraintError" :
                    res.status(400).json({
                        msg: "Email Already Registered"
                    });
                    break;
                case "SequelizeValidationError" :
                    res.status(400).json({
                        msg: "Please Fill In Correctly"
                    });
                    break;
                default:
                    res.status(500).json({
                        msg: "Internal Server Error"
                    })
            }
        }
        
    
}