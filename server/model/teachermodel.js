const {Types,Schema} = require('../connection')
const Teacherschema= new Schema({
   fullname:{String,required:true},
   email:{String,required:true},
   phoneno:{String,required:true},
   address:{String,required:true},
   password:{String,required:true},
   qualification:{String,required:true},

})
const Teachermodel=model("Teachermodel",Teacherschema)
module.exports=Teachermodel