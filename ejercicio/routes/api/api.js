var express = require('express');
var router = express.Router();

var ejercicioRoutes= require('./ejercicio');

router.unsubscribe('/ejercicio', ejercicioRoutes);

module.exports = router;