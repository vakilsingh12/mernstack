import React,{useState} from 'react'
import signup from '../Images/signup.png'
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name:"",
    email:"",
    mobile:"",
    password:"",
    cpassword:""
  });
  let name,value;
  const handleInputs = (e) => {
    name=e.target.name;
    value=e.target.value;
    setUser({
      ...user,[name]:value
    })
  }
  const PostData = async(e) => {
   e.preventDefault();
   const {name,email,mobile,password,cpassword}=user;
   const res=await fetch('/register',{
     method:"POST",
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify({
       name,email,mobile,password,cpassword
     })
   });
   const data=await res.json();
   if(data.status===422||!data){
     window.alert("Invalid  registration")
   }else{
     window.alert('Succefully registered')
     navigate('/login')
   }
  }
  return (
    <>
   <section>
     <div className="container mt-2 contactdiv">
     <h2 className='form-title px-4 py-3'><u>SignUp</u></h2>
       <div className="row">
         <div className="col-2"></div>
         <div className="col-5">
            <form className='mt-2' method='POST'>
            <div className="form-group p-3">
            <label htmlFor="name">
            <i className="zmdi zmdi-account icons"></i>
            </label>
            <input type="name" className="form-control" name='name' placeholder="Enter name"
              onChange={handleInputs}
              value={user.name}
            />
            </div>
            <div className="form-group p-3">
            <label htmlFor="email"><i className="zmdi zmdi-email emailicon"></i></label>
            <input type="email" className="form-control" name="email" placeholder="Enter email"
              onChange={handleInputs}
              value={user.email}
            />
            </div>
            <div className="form-group p-3">
            <label htmlFor="mobile"><i className="zmdi zmdi-phone mobileicon"></i></label>
            <input type="mobile" className="form-control" name='mobile'  placeholder="Enter mobile"
              onChange={handleInputs}
              value={user.mobile}
            />
            </div>
            <div className="form-group p-3">
            <label htmlFor="password"><i className="zmdi zmdi-lock passwordicon"></i></label>
            <input type="password" className="form-control" name='password' placeholder="Password"
              onChange={handleInputs}
              value={user.password}
            />
            </div>
            <div className="form-group p-3">
            <label htmlFor="password"><i className="zmdi zmdi-lock cpasswordicon"></i></label>
            <input type="password" className="form-control" name='cpassword' placeholder="Confirm Password"
              onChange={handleInputs}
              value={user.cpassword}
            />
            </div>
            <input type="submit" value="Register" className='btn btn-primary m-3' onClick={PostData} />
            </form>
         </div>
         <div className="col-5 mt-5 signupimage">
           <img src={signup} alt="signup" className='w-100 h-100' />
         </div>
       </div>
     </div>
   </section>
    </>
  )
}

export default Signup