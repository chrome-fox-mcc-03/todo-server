const { user } = require('./../models')
const checkAuthent = require('./../helper/jwt').checkAuthent
function authenticate(req,res,next){
    try {
        const decoded = checkAuthent(req.headers.token)
        //perlu di findone
        const id = decoded.id
        user.findOne({
            where: {
                id
            }
        })
            .then(result => {
                if (!result) {
                    throw ({name:"noIdFound" ,errors: [{message: "Id not found"}]})
                } else {
                    req.decoded = result
                    console.log(decoded)
                    console.log(req.decoded)
                    next()
                }
            })
            .catch(err => {
                next(err)
            })
    } catch(err) {
        next(err)
    }
}

module.exports = authenticate