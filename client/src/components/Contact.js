import React from 'react'

function Contact() {
  return (
<>
<div className="container mt-5">
      <div className="row d-flex justify-content-between">
        <div className="col-3  px-2 py-3 contactdiv">
          <h4>Phone</h4>
          <p>+91:9877751654</p>
        </div>
        <div className="col-3  p-3 contactdiv">
          <h4>Email</h4>
          <p>vakilverma7@gmail.com</p>
        </div>
        <div className="col-3  p-3 contactdiv">
          <h4>Address</h4>
          <p>Pilibangan</p>
        </div>
      </div>
    </div>
    <div className="container mt-4  p-4 contactdiv">
      <h2>Get In Touch</h2><br />
      <form action="">
      <div className="row">
      <div className="col-1"></div>
        <div className="col-3">
          <input type="text" name="name" placeholder='Enter name'/>
        </div>
        <div className="col-3">
          <input type="email" name="email" id="" placeholder='Enter email' />
        </div>
        <div className="col-3">
          <input type="text" name="mobile" id="" placeholder='Enter mobile' />
        </div>
        <div className="col-1"></div>
      </div><br />
      <div className="row">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <textarea name="" id="" cols="80" rows="5"></textarea>
        </div>
        <div className="col-1"></div>
      </div>
      </div>
      <input type="submit" value="Send Message" className='btn btn-primary sendmsg' />
      </form>
    </div>
</>
  )
}

export default Contact