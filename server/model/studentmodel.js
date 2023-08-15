const {Types,Schema,model} = require('../connection')
const Studentschema= new Schema({
   fullname:{ 
    type:String,
    required:true
  },
   email:{ type:String,required:true},
   phoneno:{ type:String,required:true},
   password:{ type:String,required:true},
   interestedCategories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Coursecategorymodel' // Reference to the 'CourseCategory' model
      }
    ],
    address:{type:String,required:true}

})
const Studentmodel=model("Studentmodel",Studentschema)
module.exports=Studentmodel