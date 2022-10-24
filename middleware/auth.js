const jwt = require('jsonwebtoken')
const {UnautheticatedError} = require('../errors')

const authhenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization; 
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnautheticatedError('No token ')  //401 error de autenticación
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id, username}
        next()
       
    } catch (error) {
        throw new UnautheticatedError('Not authorized to access this route')

    }

}

module.exports = authhenticationMiddleware;