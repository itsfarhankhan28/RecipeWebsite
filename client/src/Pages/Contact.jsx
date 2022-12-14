import React from 'react'
import Navbar from '../components/Navbar'
import './Contact.css'
import contactbgimg from '../assets/contactbgimg.png'
import { useState } from 'react'
import { useEffect } from 'react'

const Contact = () => {

  const [userdetails , setUserdetails] = useState({})

  const getuserdetails = async()=>{
    try{
      const res = await fetch('/getuserdata',{
        method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
    })

    const data =await res.json()
    setUserdetails(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getuserdetails()
  },[])

  return (
    <>
    <Navbar/>
      <div className="wholecontact">
        <div className="contact">
          <div className="contactform">
                <div className="contactformhead">
                    <h1>Get in touch!</h1>
                    <h4>Contact us for any query</h4>
                </div>
                <div className="contactformcontent">
                    <div className="contactuserdetail">
                        <div className="contactuserdetail1">
                        <i id='accountsvg' class="zmdi zmdi-account zmdi-hc-2x"></i>
                        <h2 id='contactaccountname'>Name</h2>
                        <p id='contactusername'>{userdetails.name}</p>
                        </div>


                        <div className="contactuserdetail2">
                        <i id='emailsvg' class="zmdi zmdi-email zmdi-hc-2x"></i>
                        <h2 id='contactaccountemail'>Email</h2>
                        <p id='contactuseremail'>{userdetails.email}</p>
                        </div>


                        <div className="contactuserdetail3">
                        <i id='idsvg' class="zmdi zmdi-accounts-list-alt zmdi-hc-2x"></i>
                        <h2 id='contactaccountid'>Id</h2>
                        <p id='contactuserid'>{userdetails._id}</p>
                        </div>
                    </div>
                    <div className="contactusermessage">
                    <label id='messagelabel' htmlFor="message">Message</label>
                    <textarea id="usermessage" name="message" rows="15" cols="35" placeholder='Enter your message or query here'></textarea>
                    </div>
                </div>
                <button id='msgbtn'>Submit</button>
            </div>
            <div className="contactimg">
                <img src={contactbgimg} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
