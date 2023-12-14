const {Types,Schema,model} = require('../connection')
// req.body and model keys should be same 
const Enrollschema= new Schema({
//    fullname:String,
//    email:String,
//    phoneno:String,
//    password:String,
//    interested:String,
//    qualification:String,
//     address:String,
// courseId: String,
    studentId: String,
    enrolledCourses: [String],

})
const Enrollmodel=model("Enrollmodel",Enrollschema)
module.exports=Enrollmodel