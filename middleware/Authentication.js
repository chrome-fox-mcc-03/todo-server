const { vertify } = require('../helper/HelperJwt')
const { User, Project } = require('../models')
module.exports = (req, res, next) => {
    try {
        const decode = req.headers.token
				const payload = vertify(decode)
				req.currentId = payload.id
        User.findOne({
					where: {
						id: req.currentId
					}
        })
        .then(data =>{
					if(data) {
						next()
					}
        })
    } catch (error) {
        next(error)
    }
}