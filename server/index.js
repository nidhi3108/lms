const express= require('express')
const app=express();

const port=5000;
const studentrouter=require('./router/studentrouter')
const cors=require('cors')

app.use(express.json())
app.use(cors({
    origin:['*']
}))

app.use('/student',studentrouter)

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})


