const mongoose=require('mongoose')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  mobile:{
    type:Number,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  cpassword:{
    type:String,
    required:true
  },
  tokens:[
    {
      token:{
        type:String,
        required:true
      }
    }
  ]
});



// Hashin password using middleware

userSchema.pre('save',async function(next){
   if(this.isModified('password')){
     this.password=await bcrypt.hash(this.password,12)
     this.cpassword=await bcrypt.hash(this.cpassword,12)
   }
   next()
})

// Json web token
userSchema.methods.generateAuthToken=async function(){
   try{
       let token=jwt.sign({_id:this._id},process.env.SECRET_KEY)
       this.tokens=this.tokens.concat({token});
       await this.save();
       return token
   }catch(err){
     console.log("error"+err); 
   }
}

const User=mongoose.model('USER',userSchema)

module.exports=User