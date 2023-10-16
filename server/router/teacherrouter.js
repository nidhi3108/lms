const express= require('express')
const model= require("../model/teachermodel")
const router=express.Router();


router.post('/register',(req,res)=>{
    console.log(req.body);
    new model(req.body).save()
    .then((result)=>{
        console.log("teacher register data save");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})

router.post('/login',(req,res)=>{
    console.log(req.body);
    const loginData= req.body;
    model.findOne({email:loginData.email,password:loginData.password})
    .then((result)=>{
        if(result){
            res.status(200).json(result);
            console.log(" teacher login data match");
        }
        else{
            res.status(401).json({status:"login faled"})
        }
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})


module.exports=router