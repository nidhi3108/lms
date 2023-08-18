const dotenv=require('dotenv')
const express= require('express')
const app=express();
const port=5000;
dotenv.config({path:'./.env'});

const studentrouter=require('./router/studentrouter')
const teacherrouter=require('./router/teacherrouter')
const cors=require('cors')

app.use(express.json());

app.use(cors({
    origin:'*'
}))
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  
app.use('/student',studentrouter)
app.use('/teacher',teacherrouter)

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})


