const {Types,Schema,model} = require('../connection')
const Teacherschema= new Schema({
   fullname:String,
   email:String,
   phoneno:String,
   address:String,
   password:String,
   qualification:String,
})
const Teachermodel=model("Teachermodel",Teacherschema)
module.exports=Teachermodel