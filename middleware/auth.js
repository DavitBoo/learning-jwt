const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const authhenticationMiddleware = async (req, res, next) => {
    console.log(req.headers.authorization)
    next()
}

module.exports = authhenticationMiddleware;