const express = require("express");
const router = express.Router();
const passport = require('passport');

router.use(passport.initialize())

require('../auth/passAuth')


let requireJwt = passport.authenticate('jwt', {session: false})


router.get('/protected', requireJwt, (req,res) =>{
    console.log('passed protected page')
    res.json({isValid: true})
})

module.exports = router;