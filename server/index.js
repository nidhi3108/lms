const dotenv=require('dotenv')
const express= require('express')
// const jwt = require('jsonwebtoken');
const app=express();
const port= process.env.port ||8080;
dotenv.config({path:'./.env'});

const studentrouter=require('./router/studentrouter')
const teacherrouter=require('./router/teacherrouter')
const filerouter=require('./router/filerouter')
const courserouter=require('./router/courserouter')
const chapterrouter=require('./router/chapterrouter')
const enrollrouter=require('./router/enrollrouter')
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
app.use('/course',courserouter)
app.use('/file', filerouter)
app.use('/chapter', chapterrouter)
app.use('/enroll', enrollrouter)

app.use(express.static('./static/uploads'));

// const createToken= async()=>{
//    const token = await jwt.sign({_id:"64df24784fc57cdd1c9e869e"},"mynameisnidhvermanadthisismylmsporjectoflnodeandreact",{
//     expiresIn:'2 minutes'
//    })
//    console.log(token);

//    const userverify= await jwt.verify(token,"mynameisnidhvermanadthisismylmsporjectoflnodeandreact");
//    console.log(userverify);
// }

// createToken();
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})


