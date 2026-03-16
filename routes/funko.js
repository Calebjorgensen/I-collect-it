const express = require('express');
const router = express.Router();

const funkoController = require('../controllers/funko');

router.get('/', funkoController.getAll);

router.get('/:id', funkoController.getSingle);

router.post('/', funkoController.createFunko);

router.put('/:id', funkoController.updateFunko);

router.delete('/:id', funkoController.deleteFunko);


module.exports = router;