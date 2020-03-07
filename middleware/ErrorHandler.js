module.exports = (err, req, res, next) => {
    console.log(err)
    let obj = 
    {
        status: 500,
        message: 'Interval sistem error'
    }
    if(err.name === 'SequelizeValidationError') {
        let arr = []
        err.errors.forEach(el => {
            arr.push(el.message)
        })
        res.status(403).json(arr)
    }
    else if (err.name == 'costume') {
        obj.status = err.status
        obj.message = err.message
        res.status(obj.status).json(obj.message)
    }
    else if (err.name ==='SequelizeUniqueConstraintError'){
        res.status(403).json("Email is Already exist")
    }
    else if (err.name == "JsonWebTokenError") {
        obj.status = 403
        obj.message = 'Please login first'
        res.status(obj.status).json(obj.message)
    }
    else {
        res.status(obj.status).json(obj.message)
    }
}