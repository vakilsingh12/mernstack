const mongoose=require('mongoose')
const DB=process.env.DATABASE
mongoose.connect(DB,{
  useNewUrlParser: true, 
  useUnifiedTopology: true
}).then(()=>{
  console.log(`connnection successfull`);
}).catch((error)=>{
  console.log("no conncetion",error);
})