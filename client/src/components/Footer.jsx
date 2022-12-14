import React from 'react'
import './Footer.css'
import footerbgimg from '../assets/footerbgimg.jpg'

const Footer = () => {
  return (
    <>
      <div class="footer">
        <div className="footercontainer1">
        </div>
        <div className="footercontainer2">
            <div className='subcontainer1'>
                <h1>All About Recipes</h1>
            </div>
            <div className='subcontainer2'>
                <div className='footerlinks1'>
                    <h1 className='subhead'>Partnership</h1>
                    <div className="sublinks1">
                        <h2>Websites</h2>
                        <h2>Social Media</h2>
                        <h2>Branding</h2>
                    </div>
                </div>
                <div className='footerlinks2'>
                    <h1 className='subhead'>About</h1>
                    <div className="sublinks2">
                        <h2>Our Projects</h2>
                        <h2>About Us</h2>
                    </div>
                </div>
                <div className='footerlinks3'>
                    <h1 className='subhead'>Support</h1>
                    <div className="sublinks3">
                        <h2>Support Request</h2>
                        <h2>Contact</h2>
                    </div>
                </div>
            </div>
            <div className='subcontainer3'>
                <div className="subfooter1">
                    <h3>All rights reserved 2022</h3>
                </div>
                <div className="subfooter2">
                <i id='icon1' class="zmdi zmdi-twitter zmdi-hc-2x"></i>
                <i id='icon2' class="zmdi zmdi-facebook zmdi-hc-2x"></i>
                <i id='icon3' class="zmdi zmdi-linkedin zmdi-hc-2x"></i>
                <i id='icon4' class="zmdi zmdi-youtube zmdi-hc-2x"></i>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
