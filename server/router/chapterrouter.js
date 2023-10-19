const router= require("express").Router();
const Chaptermodel=require('../model/chaptermodel');

router.post('/add',(req,res)=>{
    console.log(req.body);
    new Chaptermodel(req.body).save()
    .then((result)=>{
        console.log("chapter data save");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})



module.exports=router