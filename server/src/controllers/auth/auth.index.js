const User = require('../../model/authModel')

const AuthService = require('./auth.service')

const authService = new AuthService(User)

module.exports = authService;