const express = require('express')
const authRouter = express.Router()
const passport = require('../services/auth/local')
const authHelpers = require('../services/auth/auth-helpers')
const usersController = require('../controllers/users-controller')

authRouter.post('/register', usersController.create)
//submit login form
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/api/auth/verify', 
    failureRedirect: '/api/auth/verify',
    failureFlash: true,
  })
)
//info about the status of the auth and user info route
authRouter.get('/verify', (req, res) => {
    if (req.user) return res.status(200).json({
      message: 'ok',
      auth: true,
      data: {
        user: req.user,
      }
    })
    else return res.status(400).json({
      message: 'Login failed',
      auth: false,
      data: {
        user: null,
      }
    })
  })
//logout route
authRouter.get('/logout', (req, res) => {
    req.logout()
    res.json({
      message: 'logged out',
      auth: false,
      data: {
        user: null,
      }
    })
  })
  
  module.exports = authRouter