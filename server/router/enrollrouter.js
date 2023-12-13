const router= require("express").Router();
const Enrollmodel=require('../model/enrollmodel');
const enrolledCourses=require('../model/enrollmodel')

// router.post('/save',(req,res)=>{
//     console.log(req.body);
//     let studentid=req.body.studentId
//     console.log("both id here");
//     let userEnrollments =Enrollmodel.findOne({ studentid });
//     if(!userEnrollments){
//         enrolledCourses.append(req.body)
//     new Enrollmodel(enrolledCourses).save()
//     .then((result)=>{
//         console.log("enrolled data save");
//         res.json(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//         res.json(err)
//     })
// }
// else{
//     console.log("Already enrolled in this course");
// }
// })

router.post('/save', async (req, res) => {
    try {
        const { studentId, courseId } = req.body;

        // Check if the user is already enrolled in the course
        const userEnrollments = await Enrollmodel.findOne({ studentId });

        if (userEnrollments && userEnrollments.enrolledCourses.includes(courseId)) {
            console.log("Already enrolled in this course");
            return res.status(400).json({ message: "Already enrolled in this course" });
        }

        // If the user is not enrolled, update the enrollments
        if (!userEnrollments) {
            await Enrollmodel.create({
                studentId,
                enrolledCourses: [courseId]
            });
        } else {
            userEnrollments.enrolledCourses.push(courseId);
            await userEnrollments.save();
        }

        console.log("Enrolled data saved");
        res.status(200).json({ message: "Enrollment successful" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports=router