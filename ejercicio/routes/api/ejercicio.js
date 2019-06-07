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

});// get

router.post('/',(req,res,next)=>{

});// post




module.exports = router;