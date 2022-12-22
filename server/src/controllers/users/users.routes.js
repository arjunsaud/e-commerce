const UserController = require('./users.controllers');
const { verifyUser } = require('./users.middleware');

const userRouter = require('express').Router()

userRouter.get('/getusers',verifyUser,UserController.getUsers)
userRouter.get('/getuser/:id',verifyUser,UserController.getUser)

userRouter.get("/searchusers",verifyUser,UserController.searchUsers)

userRouter.delete('/deleteuser/:id',verifyUser,UserController.deleteUser)


module.exports = userRouter;