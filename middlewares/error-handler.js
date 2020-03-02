 const errorHandler = (err, req, res, next) => {
    let status = err.status || 500;
    const obj = {}
    obj.name = err.name || 'Internal Server Error';
    obj.errors = [];

    if (err.name === 'Not found') {
      status = 404;
      obj.errors.push(err.message);
    }

    res.status(status).json(obj);
  }

module.exports = errorHandler;