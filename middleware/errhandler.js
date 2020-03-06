module.exports = function(err, req, res, next) {
    const message = []
        if(err) {
            switch(err.name) {
                case "SequelizeUniqueConstraintError" :
                    message.push("Email Already Registered") 
                    res.status(400).json(message);
                    break;
                case "SequelizeValidationError" :
                    console.log("ini tanda validasi erorr")
                    console.log(err.errors[0].message)
                   for(let i = 0; i < err.errors.length; i++) {
                       message.push(err.errors[i].message)
                   }
                    console.log(message)
                    res.status(400).json(message);
                    break;
                default:
                    console.log(err)
                    res.status(500).json(err)
            }
        }
      if(err) {
          switch(err.message) {
             default :
                  message.push(err.message)
                  res.status(400).json(message)
          }
      }  
    
}