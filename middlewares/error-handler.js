 const errorHandler = (err, req, res, _) => {
   let status = err.status || 500;
   const obj = {}
   console.log(err);
   // TODO: Switch case ke class (avoid conditional)
   // class Error {}
   // class ValidationError extends Error {}
   switch (err.name) {
     case 'Not found':
       status = 404;
       break;
     case 'SequelizeValidationError':
       status = 400;
       break;
     case 'SequelizeUniqueConstraintError':
       status = 400;
       break;
      default:
        break;
   }
   if (err.errors) {
     obj.message = err.errors.map(el => el.message);
     obj.message += '\n' + err.message || '';
   } else {
    obj.message = err.message || '';
   }
   console.log(obj);
   res.status(status).json(obj);
 }

module.exports = errorHandler;