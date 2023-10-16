
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




module.exports=router