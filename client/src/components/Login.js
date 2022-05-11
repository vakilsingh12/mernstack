import React from 'react'
import login from '../Images/login.jpeg';
function Login() {
  return (
    <>
   <section>
     <div className="container mt-5 p-5 contactdiv">
     <h2 className='form-title px-4 py-3'><u>Login</u></h2>
       <div className="row">
         <div className="col-2"></div>
         <div className="col-5">
            <form className='mt-2'>
            <div className="form-group p-3">
            <label htmlFor="email"><i className="zmdi zmdi-email email"></i></label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group p-3">
            <label htmlFor="password"><i className="zmdi zmdi-lock password"></i></label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <input type="submit" value="Login" className='btn btn-primary m-3' />
            </form>
         </div>
         <div className="col-5 mt-5 signupimage">
           <img src={login} alt="signup" className='w-75 h-100' />
         </div>
       </div>
     </div>
   </section>
    </>
  )
}

export default Login