var express = require('express');
var router = express.Router();

var ejercicioCollection=[];
var ejercicioStruct ={
    "id":"uuid",
    "clase":"",
    "seccion":"",
    "cupos":0,
    "campues":"",
    "docente":""
}

router.get('/',(req,res,next)=>{
    res.status(403).json({msj:"Not Implemented"});
});// get

router.post('/',(req,res,next)=>{
    res.status(403).json({msj:"Not Implemented"});
});// post


module.exports = router;