const {Types,Schema,model} = require('../connection')
const mongoose= require('mongoose')
const Teacherschema= new Schema({
   name:String,
   email:String,
   phoneno:String,
   address:String,
   password:String,
   qualification:String,
   thumbnail:String,
   experience:String,
   // createdBy:{type: mongoose.Types.ObjectId},
})
const Teachermodel=model("Teachermodel",Teacherschema)
module.exports=Teachermodel