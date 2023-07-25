const express = require('express');

const router = express.Router();

router.get('/',function(req,res){
    return res.end('<h1>everything fine</h1>');
})


router.use('/api',require('./api'));

module.exports = router;