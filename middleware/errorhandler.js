module.exports = (err, req, res, next) => {
    console.log(err)
    if(err.name === 'SequelizeValidationError') {
        let error = err.errors.map(el => el.message)
        res.status(403).json(error)
    } else if (err.name == 'empty'){
        res.status(404).json("Data Not Found")
    } else {
        res.status(500).json("Internal Database Error")
    }
}