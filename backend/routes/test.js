const express =require("express");
const mongoose=require("mongoose");
const path=require('path');
const router = express.Router();
const bodyParser = require("body-parser");
const mongodb=require('mongodb');

router.use("/whats_up",(req,res,next)=>{
    console.log("Hoo yeah");
    res.json({"Name":"shakalaka boom boom"});
})



module.exports=router();