const express = require('express')
const emailController = require('../controller/emailController')


const Router = express.Router()

Router.post('/email/sendEmail', emailController.validation, emailController.sendEmail)

module.exports = Router;