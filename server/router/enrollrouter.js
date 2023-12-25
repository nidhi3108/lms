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
    console.log("req.body" , req.body);
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


// unenroll course 

router.post('/unenroll_course', async (req, res) => {
   console.log("studentid",req.body.studentId);
   console.log("courseid",req.body.courseId);
    try {
      const { studentId, courseId } = req.body;
  
      const userEnrollment = await Enrollmodel.findOne({ studentId });
  
      if (!userEnrollment) {
        return res.status(404).json({ error: 'User enrollment not found' });
      }
  
      const updatedCourses = userEnrollment.enrolledCourses.filter(
        (course) => course !== courseId
      );
  
      userEnrollment.enrolledCourses = updatedCourses;
  
      await userEnrollment.save();
  
      res.status(200).json({ message: 'Course unenrolled' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
// router.get('/unenroll_course/:courseId',(req,res)=>{
//     console.log("id", req.body.id);
//     console.log("enroll req param id",req.params.courseId);
//     Enrollmodel.findByIdAndDelete({enrolledCourses: req.params.courseId})
//     .then((result) => {
//         res.status(200).json(result)
        
//     }).catch((err) => {
//         res.json(err)
//     });
// })


module.exports=router