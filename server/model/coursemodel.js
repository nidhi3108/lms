const {Types,Schema} = require('../connection')
const Courseschema= new Schema({
   title:{String,required:true},
   descriptionil:{String,required:true},
   Teachermodel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teachermodel' // This refers to the 'Teacher' model
  },
  Coursecategorymodel:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coursecategorymodel' // This refers to the 'Teacher' model
  }
})
const Coursemodel=model("Coursemodel",Courseschema)
module.exports=Coursemodel