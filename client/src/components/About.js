import React from 'react'
import Profile from '../Images/vsk.png'
function About() {
  return (
    <>
      <div className="container mt-5 contactdiv p-5">
        <form action="">
          <div className="row">
            <div className="col-md-4">
              <img src={Profile} alt=""  className='w-75 h-100 p-3'/>
            </div>
            <div className="col-md-6 pt-3">
              <h5>Vakil Verma</h5>
              <h6 className='text-primary'>Full Stack <span className='text-danger'>Developer</span> </h6>
              <p>Ranking: <span>9/10</span></p>
              <ul className="nav nav-tabs" role="tablist" >
                <li className="nav-item">
                  <a className="nav-link active" href="#home" id='home-tab' data-toggle="tab" role="tab">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#profile" id='profile-tab' data-toggle="tab" role="tab">Timeline</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 pt-3">
              <input type="text" className='btn btn-primary w-75' value="Edit Profile" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 px-4">
              <p>Work Link</p>
              <a href="">You Tube</a><br />
              <a href="https://www.linkedin.com/in/vakil12/" target="_blank">Linkdlin</a><br />
              <a href="">Facebook</a><br />
              <a href="">Instagram</a><br />
              <a href="">Website</a><br />
            </div>
            <div className="col-md-8">
              <div className="tab-content" id='myTabContent'>
               <div className="tab-pane fade show active" id="home" aria-labelledby="home-tab">
               <div className="row">
                 <div className="col-md-6">
                   <label htmlFor="UserId">UserID</label>
                 </div>
                 <div className="col-md-6">
                   <label htmlFor="UserId">987654345678</label>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-6">
                   <label htmlFor="name">Name</label>
                 </div>
                 <div className="col-md-6">
                   <label htmlFor="name">Vakil Singh</label>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-6">
                   <label htmlFor="email">Email</label>
                 </div>
                 <div className="col-md-6">
                   <label htmlFor="email">vakilverma7@gmail.com</label>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-6">
                   <label htmlFor="name">Contact</label>
                 </div>
                 <div className="col-md-6">
                   <label htmlFor="name">+91:9877751658</label>
                 </div>
               </div>
               </div>
               <div className="tab-pane fade show" id="profile" aria-labelledby="profile-tab">
               <div className="row">
                 <div className="col-md-6">
                   <label htmlFor="UserId">Experience</label>
                 </div>
                 <div className="col-md-6">
                   <label htmlFor="UserId">One Year</label>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-6">
                   <label htmlFor="name">Company</label>
                 </div>
                 <div className="col-md-6">
                   <label htmlFor="name">Success4</label>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-6">
                   <label htmlFor="email">Technology</label>
                 </div>
                 <div className="col-md-6">
                   <label htmlFor="email">Html,CSS,Javascript,React,Node js</label>
                 </div>
               </div>
               </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About