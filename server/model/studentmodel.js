const {Types,Schema,model} = require('../connection')
// const Studentschema= new Schema({
//    fullname:{ 
//     type:String,
//     required:true
//   },
//    email:{ type:String,required:true},
//    phoneno:{ type:String,required:true},
//    password:{ type:String,required:true},
//    interestedCategories: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: 'Coursecategorymodel' // Reference to the 'CourseCategory' model
//       }
//     ],
//     address:{type:String,required:true}



    

// })
const Studentschema= new Schema({
   fullname:String,
   email:String,
   phoneno:String,
   password:String,
   interested:String,
   qualification:String,
  //  interestedCategories: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: 'Coursecategorymodel' // Reference to the 'CourseCategory' model
  //     }
  //   ],
    address:String,
})
const Studentmodel=model("Studentmodel",Studentschema)
module.exports=Studentmodel