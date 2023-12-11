const router= require("express").Router();
const Enrollmodel=require('../model/enrollmodel');

router.post('/save',(req,res)=>{
    console.log(req.body);
    new Enrollmodel(req.body).save()
    .then((result)=>{
        console.log("enrolled data save");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})


module.exports=router