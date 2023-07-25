const express = require('express');

const router = express.Router();

router.get('/',function(req,res){
    res.end('<h1>Everything good.You can checkout the routes now</h1>')
})

//forwarding all api related routes
router.use('/api',require('./api'));

module.exports = router;