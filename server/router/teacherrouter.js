const express= require('express')
const model= require("../model/teachermodel")
const router=express.Router();


router.post('/register',(req,res)=>{
    console.log(req.body);
    new model(req.body).save()
    .then((result)=>{
        console.log("data save");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})



module.exports=router