const express =require("express");
const router=express.Router();
const cryptoController=require("./controller/crypto.controller");
const {cryptoCacheMiddleware}=require("./middleware/crypto.cache");

router.get('/',function(req,res){
    res.send("Cache project Home Page");
    res.status(200);
});``

router.get('/crypto',cryptoCacheMiddleware,cryptoController);
module.exports=router;