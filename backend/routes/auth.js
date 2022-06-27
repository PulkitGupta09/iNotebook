const express = require('express');
const router = express.Router();
const User = require('../models/User');


//create a User using: POST "/api/auth/". Doesn't require auth
router.get('/',(req,res)=>{
    console.log(req .body);
    const user = User(req.body);
    user.save()
    res.json(req.body);
})

module.exports = router; 