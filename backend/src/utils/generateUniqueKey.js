const crypto = require('crypto');

module.exports = function gerenateUniqueKey() {
    return crypto.randomBytes(4).toString('HEX');
}