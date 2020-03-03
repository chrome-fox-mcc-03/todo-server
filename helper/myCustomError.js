module.exports = function(code, message) {
    let err = new Error(message);
    err.code = code;
    return err;
}