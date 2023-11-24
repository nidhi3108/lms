const {Types,Schema,model} = require('../connection')
const Teacherschema= new Schema({
   name:String,
   email:String,
   phoneno:String,
   address:String,
   password:String,
   qualification:String,
   thumbnail:String,
})
const Teachermodel=model("Teachermodel",Teacherschema)
module.exports=Teachermodel