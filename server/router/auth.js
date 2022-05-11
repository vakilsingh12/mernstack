const jwt=require('jsonwebtoken')
const express=require('express');
const router=express.Router();
const User=require('../model/userSchema')
const bcrypt=require('bcryptjs');
// Added home router 
router.get('/',(req,res)=>{
  res.send("router")
});
// Register page to save the data in database
router.post('/register',async(req,res)=>{
    const {name,email,mobile,password,cpassword}=req.body;
    if(!name||!email||!mobile||!password||!cpassword){
     return res.status(422).json({error:"Fill the detail of input box"})
    }
    try{
      const user=await User.findOne({email});
      if(user){
        return res.status(422).json({error:'user already exist'})
      }else if(password!==cpassword){
        return res.status(422).json({error:'password & cpassword should be same'})
      }else{
      const userDetail=new User({name,email,mobile,password,cpassword})
      await userDetail.save();
        return res.status(201).json({"Success":"User Registered successfully"})
      }
    }catch(err){
    console.log(err);
    }

})
router.post('/login',async(req,res)=>{
  const {email,password}=req.body;
  if(!email||!password){
    return res.status(400).json({error:"Fill the detail"})
   }
  try{
    const user=await User.findOne({email});
   if(user){
    const isMatch=await bcrypt.compare(password,user.password);
    const token=await user.generateAuthToken();
    res.cookie("jwt",token,{
      expires:new Date(Date.now()+2589000000),
      httpOnly:true
    })
    console.log(token);
    if(isMatch){
      return res.status(200).json({"success":"User Login successfully"})
    }else{
    return res.status(422).json({error:"Invalid Credientials"})
    }
   }else{
    return res.status(422).json({error:"Invalid Credientials"}) 
  }
  }catch(err){
    console.log("error");
  }
})

module.exports=router;