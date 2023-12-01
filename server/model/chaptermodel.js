const {Types,Schema,model} = require('../connection')
const mongoose= require('mongoose')
const Chapterschema= new Schema({
   title:String,
   description:String,
   file:String,
   youtubeLink: String,
   createdBy:{type: mongoose.Types.ObjectId},
   courseId:{type: mongoose.Types.ObjectId},
    createdAt:Date
    // thumbnail:String,
    // createdBy:{type: mongoose.Types.ObjectId, ref:"users"},
    // createdAt:Date,
  //  Teachermodel: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Teachermodel' // This refers to the 'Teacher' model
  // },
  // Coursecategorymodel:{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Coursecategorymodel' // This refers to the 'Teacher' model
  // }
})

const Chaptermodel=model("Chaptermodel",Chapterschema)
module.exports=Chaptermodel