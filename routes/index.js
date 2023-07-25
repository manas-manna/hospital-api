const express = require('express');

const router = express.Router();

//forwarding all api related routes
router.use('/api',require('./api'));

module.exports = router;