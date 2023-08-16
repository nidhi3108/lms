const express= require('express')
const app=express();

const port=5000;
const studentrouter=require('./router/studentrouter')
const teacherrouter=require('./router/teacherrouter')
const cors=require('cors')

app.use(express.json())
app.use(cors({
    origin:['https://localhost:3000']
}))

app.use('/student',studentrouter)
app.use('/teacher',teacherrouter)

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})


