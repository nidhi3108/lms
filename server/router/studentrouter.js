const express= require('express')
const model= require("../model/studentmodel")
const router=express.Router();

router.post('/register',(req,res)=>{
    console.log(req.body);
    console.log("req.body");
    new model(req.body).save()
    .then((result)=>{
        console.log("data save");
        console.log(result);
        res.json(result);
    })
    .catch((err)=>{
        console.log(err)
        res.json(err)
    })
})

module.exports=router