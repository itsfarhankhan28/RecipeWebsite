import React from 'react'
import './About.css'
import aboutusimg from '../assets/aboutusimg.png'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
    <Navbar/>
      <div className="aboutbackground">
        <img src={aboutusimg} alt="" />
      </div>
      <div className="aboutcontent">
        <div className="aboutcontent1">
            <h1 id='aboutcontenthead'>About Us</h1>
            <h2 id='aboutcontenttext'>'Our website helps you and your friends cook amazing food with the help of recipes <br />You can not only search for certain recipe but also share your own recipes with others through this website'</h2>
        </div>
        <div className="aboutcontent2">
            <h1 id='aboutcontent2head'>Meet Our Team</h1>
            <div className="aboutteam">
                <div className="person1">
                    <div id='foodimg1'></div>
                    <div id="personimage1"></div>
                    <h2 id='person1name'>FARHAN KHAN</h2>
                </div>
                <div className="person2">
                    <div id="foodimg2"></div>
                    <div id="personimage2"></div>
                    <h2 id='person2name'>ANISHA PRABHU</h2>
                </div>
                <div className="person3">
                    <div id="foodimg3"></div>
                    <div id="personimage3"></div>
                    <h2 id='person3name'>SUDEEP POOJARY</h2>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
