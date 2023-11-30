const {Types,Schema,model} = require('../connection')
const mongoose= require('mongoose')
const Courseschema= new Schema({
   title:String,
   description:String,
   file:String,
    thumbnail:String,
    duration:String,
    createdBy:{type: mongoose.Types.ObjectId},
    createdAt:Date,
  //  Teachermodel: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Teachermodel' // This refers to the 'Teacher' model
  // },
  // Coursecategorymodel:{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Coursecategorymodel' // This refers to the 'Teacher' model
  // }
})

const Coursemodel=model("Coursemodel",Courseschema)
module.exports=Coursemodel