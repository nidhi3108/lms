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


router.get('/getall/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params.id);
    Chaptermodel.find({courseId: req.params.id})
    .then((result)=>{
        console.log(result);
        console.log("chapter data fetvh hogya");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        console.log(" chapter data fetching  fail hogya");
        res.json(err)
    });
})

router.get('/getallchapter/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params.id);
    Chaptermodel.find({courseId: req.params.id})
    .then((result)=>{
        console.log(result);
        console.log("sara chapter data fetvh hogya");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        console.log(" chapter data fetching  fail hogya");
        res.json(err)
    });
})

router.post('/delete',(req,res)=>{
    console.log(req.body);
    Chaptermodel.findByIdAndDelete({_id: req.body._id})
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        res.json(err);
    });
})




module.exports=router