//check username, password in post(login) request

const jwt = require('jsonwebtoken')
const { BadResquestError } = require('../errors')

const login = async (req, res) => {
    const {username, password} = req.body

    if(!username || !password){
        throw new BadResquestError('Please provide email and password')
    }

    const id = new Date().getDate()

    //try to keep the payload small, better UX
    //jsut for demo, in production use long, complex and unguessable string value!!!!!!
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})

    res.status(200).json({msg: 'user created', token})
}
const dashboard = async(req, res) => {
    const LuckyNumber = Math.floor(Math.random()*100)

    res.status(200).json({
        msg: `Hello, ${req.user.username}`, 
        secret: `Here is your authorized data, your lucky numer is ${LuckyNumber}`
    })    
}

module.exports = {
    login, dashboard
}