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
    .then((result)=> {
        if(result){
            res.status(200).json(result);
            console.log(" teacher login data match");
        }
        else {
            res.status(401).json({status:"login faled"})
        }
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})


router.get('/getallTeacher',(req,res)=>{
    console.log(req.body);
    model.find()
    .then((result)=>{
        console.log("teacherdata get");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})

router.get('/getrelatedTeacherDetail/:teacher_id',(req,res)=>{
    // console.log(req.body);
    console.log(req.params.teacher_id);
    model.findById(req.params.teacher_id).populate('email')
    .then((result)=>{
        console.log("res",result);
        console.log("relTEDteacherdata fetvh hogya");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        console.log("data fetching  fail hogya");
        res.json(err)
    });
})
 
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


module.exports=router