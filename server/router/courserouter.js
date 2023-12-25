
const router= require("express").Router();
const coursemodel=require('../model/coursemodel');
const Enrollmodel=require('../model/enrollmodel');

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


router.get('/getallcourse',(req,res)=>{
    console.log(req.body);
    coursemodel.find().populate('createdBy')
    .then((result)=>{
        console.log("coursedata get");
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


router.get('/getCourseDetail/:course_id',(req,res)=>{
    console.log("enrolled req.body",req.body);
    console.log("enrolled req.body id",req.params.course_id);
    coursemodel.findById(req.params.course_id).populate('createdBy')
    .then((result)=>{
        console.log(result);
        console.log("enrolled coursedata fetvh hogya");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        console.log("enrolledfetching  fail hogya");
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


// <---user--->
router.get('/getallstudentenrolledcourse/:id',(req,res)=>{
    console.log("user ki req.body",req.body);
    console.log("user ki req.body ki id",req.params.id);
    //we have to populate data related to user._id
    Enrollmodel.find({studentId: req.params.id})
    .then((result)=>{
        console.log(result);
        console.log("sare courses ki id fetvh hogya");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        console.log("sare courses ki id fetching  fail hogya");
        res.json(err)
    });
})



router.get('/getalldataofenrolledcourse/:id',(req,res)=>{
    console.log("userenrolledcourse ki req.body",req.body);
    console.log("userenrolledcourse ki req.body ki id",req.params.id);
    // we have to populate data related to user._id
    coursemodel.findById(req.params.id).populate('title')
    .then((result)=>{
        console.log(result);
        console.log("enrolled coursedata fetvh hogya");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        console.log("enrolledfetching  fail hogya");
        res.json(err)
    });
})



module.exports=router