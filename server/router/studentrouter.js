const express= require('express')
const model= require("../model/studentmodel")
// const Model= require("../model/teachermodel")
const router=express.Router();

router.post('/register',(req,res)=>{
    console.log("student req.body",req.body);
    console.log("req.body");
    new model(req.body).save()
    .then((result)=>{
        console.log(" student register data save");
        console.log(result);
        res.json(result);
    })
    .catch((err)=>{
        console.log(err)
        res.json(err)
    })
})


router.post('/login',(req,res)=>{
    console.log(req.body);
    console.log("req.body");
    const loginData= req.body;
    model.findOne({email:loginData.email,password:loginData.password})
    .then((result)=>{
        if(result){
            res.status(200).json(result);
            console.log(" student login data match");
        }
        else{
            res.status(401).json({status:"login faled"})
        }
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})


//edit password
router.post('/edit',(req,res)=>{
    console.log(req.body.id);
    model.findOneAndUpdate({_id: req.body.id}, {password:req.body.password})
    .then((result) => {
        res.json(result)
        console.log("pass update");
    }).catch((err) => {
        res.json(err)
    });
    
})


router.post('/editprofile',(req,res)=>{
    console.log(req.body.id);
    console.log(req.body);
    model.findOneAndUpdate({_id: req.body.id}, {password:req.body.password,name:req.body.name,email:req.body.email,interest:req.body.interest,phone:req.body.phone, address: req.body.address,thumbnail:req.body.thumbnail})
    .then((result) => {
        res.json(result)
        console.log("pass update");
    }).catch((err) => {
        res.json(err)
    });
    
})
module.exports=router