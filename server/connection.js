const mongoose= require('mongoose')
const db="Mylms";
const dburl=`mongodb+srv://nidhi3108:123Nid45@cluster0.u5hhcyg.mongodb.net/${db}?retryWrites=true&w=majority`
mongoose.connect(dburl)
.then((res)=>{
    console.log("server connected")
})
.catch((err)=>{
    console.log(err);
    console.log("err in database connection");
})

module.exports=mongoose