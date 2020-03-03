const { vertify } = require('../helper/HelperJwt')
const { User, Project } = require('../models')
module.exports = (req, res, next) => {
    try {
        const decode = req.headers.token
        const payload = vertify(decode)
        req.currentId = payload.id
        User.findOne({
					where: {
						id: payload.id
					}
        })
        .then(data =>{
					if(data) {
						next()
					}
					else{
						next(
							{
								name: "costume",
								status: 404,
								message: "User is undifiend"
							}
						)
					}
        })
        .catch(err => {
					next(err)
        })
    } catch (error) {
        next(error)
    }
}