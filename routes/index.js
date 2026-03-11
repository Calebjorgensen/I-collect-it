const express = require('express');
const router = express.Router();

router.use('/funko', require('./funko'));

module.exports = router;