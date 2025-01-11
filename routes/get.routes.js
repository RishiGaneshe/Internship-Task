const express= require('express')
const router= express.Router()
const GETrequests= require('../controllers/getRequests.js')


router.get("/sign-up", GETrequests.handleEmailSignUp)

router.get("/login", GETrequests.handleGetLoginPage)

router.get("/forger-password", GETrequests.handleGetForgetPasswordPage)



