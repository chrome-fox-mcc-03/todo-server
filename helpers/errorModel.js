// class CustomError {
//     constructor(type, message) {
//         this.type = type;
//         this.message = message;
//     }
// }

module.exports = function(code, message) {
    let err = new Error(message)
    err.code = code
    return err
}

