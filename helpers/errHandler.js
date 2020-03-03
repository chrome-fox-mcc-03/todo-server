function errHandler(error) {
    if(error.name === 'SequelizeValidationError') {
        error.map
    }
}

module.exports = errHandler;