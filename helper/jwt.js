const jwt = require('jsonwebtoken');

function getToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET);
}

function getPayload(token) {
    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded
    } catch(err) {
        return null
    }
}

module.exports = {
    getToken,
    getPayload
};