const dotenv=require('dotenv')
const express=require('express');
const app=express();
dotenv.config({path:'./config.env'})
const port=process.env.PORT
// Database connection
require('./db/conn');
// const User=require('./model/userSchema')
// Middleware
app.use(express.json())
app.use(require('./router/auth'))

app.listen(port,()=>{
console.log(`server is running on port ${port}`);
})


