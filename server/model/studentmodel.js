const {Types,Schema} = require('../connection')
const Studentschema= new Schema({
   fullname:{String,required:true},
   email:{String,required:true},
   phoneno:{String,required:true},
   password:{String,required:true},
   interestedCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coursecategorymodel' // Reference to the 'CourseCategory' model
      }
    ],
    address:{String,required:true}

})
const Studentmodel=model("Studentmodel",Studentschema)
module.exports=Studentmodel