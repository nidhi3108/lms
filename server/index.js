const express= require('express')
const app=express();
const mongoose=require('./connection')
const port=5000;





app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})


