const {Types,Schema} = require('../connection')
const Coursecategoryschema= new Schema({
   title:{String,required:true},
   descriptionil:{String,required:true},

})
const Coursecategorymodel=model("Coursecategorymodel",Coursecategoryschema)
module.exports=Coursecategorymodel