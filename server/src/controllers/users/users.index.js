const User = require('../../model/authModel');

const UserService = require('./users.services');

const userService = new UserService(User)

module.exports = userService;