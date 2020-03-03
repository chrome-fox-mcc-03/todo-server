module.exports = (err, req, res, next) => {
    console.log(err,'<<<<< Middleware')
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
        res.status(err.status).json(err.message)
    }
    else if (err.name ==='SequelizeUniqueConstraintError'){
        res.status(403).json("Email is Already exist")
    }
    else {
        res.status(obj.status).json(obj.message)
    }
}