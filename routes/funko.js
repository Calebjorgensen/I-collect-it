const express = require('express');
const router = express.Router();

const funkoController = require('../controllers/funko');

router.get('/', funkoController.getAll);

router.get('/:id', funkoController.getSingle);

module.exports = router;