
const router= require("express").Router();
const coursemodel=require('../model/coursemodel');

router.post('/add',(req,res)=>{
    console.log(req.body);
    new coursemodel(req.body).save()
    .then((result)=>{
        console.log("coursedata save");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})


router.get('/getall/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params.id);
    coursemodel.find({createdBy: req.params.id})
    .then((result)=>{
        console.log(result);
        console.log("data fetvh hogya");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        console.log("data fetching  fail hogya");
        res.json(err)
    });
})
 


router.post('/delete',(req,res)=>{
    // console.log(data);
    console.log(req.body);
    coursemodel.findByIdAndDelete({_id:req.body._id})
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        res.json(err);
    });
})


module.exports=router