const jwt = require('jsonwebtoken');

function getToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET)
}

function getPayload(token) {
    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        // let decoded = jwt.verify(token, "kesalahankuatassemuaini");
        return decoded
    } catch(err) {
        return err
    }
}

module.exports = {
    getToken,
    getPayload
};