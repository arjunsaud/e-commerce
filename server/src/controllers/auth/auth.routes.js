const AuthController = require('./auth.controller');
const {verifyUser,generateTokens} =require("./auth.middleware")


const authRouter = require('express').Router()

authRouter.post('/login', AuthController.login)

authRouter.post('/register', AuthController.register)

authRouter.post('/refresh_token',generateTokens, AuthController.refreshToken)


authRouter.get('/profile', verifyUser,AuthController.profile)


module.exports = authRouter;