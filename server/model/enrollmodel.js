const {Types,Schema,model} = require('../connection')

const Enrollschema= new Schema({
//    fullname:String,
//    email:String,
//    phoneno:String,
//    password:String,
//    interested:String,
//    qualification:String,
//     address:String,
    course_id: String,
    enrollment_id: String,
})
const Enrollmodel=model("Enrollmodel",Enrollschema)
module.exports=Enrollmodel