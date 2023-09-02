const CryptoJs = require('crypto-js');

const passEncrypt = (password) => {
    return CryptoJS.AES.encrypt(
        password,
        process.env.PASS_SEC
    ).toString();
}

const passDecrypt = (password) => {
    return CryptoJs.AES.decrypt(
        password,
        process.env.PASS_SEC
    ).toString();
}

module.exports = {passEncrypt, passDecrypt};