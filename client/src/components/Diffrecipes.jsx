import React from 'react'
import shakeimg from '../assets/shakeimg.png'
import shake2img from '../assets/shake2img.png'
import breadimg from '../assets/breadimg.png'
import lunchimg from '../assets/lunchimg.png'
import dinnerimg from '../assets/dinnerimg.png'
import dessertimg from '../assets/dessertimg.png'
import fingerfood from '../assets/fingerfoodimg.png'
import { NavLink } from 'react-router-dom'

const Diffrecipes = () => {
  return (
    <>
    <h1 id='recipehead1'>MEAL TYPE</h1>
      <div className="diffrecipes">
        {/* <div className="row1"> */}
          <NavLink to='/types/drink'>
            <div class="shakes" data-aos="zoom-out-right">
              <h1>Drinks</h1>
                <div class="images1">
                  <img id="img1" src={shakeimg} alt=""/>
                  <img id="img2" src={shake2img} alt=""/>
                </div>
            </div>
          </NavLink>
          <NavLink to='/types/breakfast'>
            <div className="breakfast" data-aos="zoom-out-down">
              <h1>BreakFast</h1>
                <div className="images2">
                  <img id='img3' src={breadimg} alt="" />
                </div>
            </div>
          </NavLink>
          <NavLink to='/types/main course' data-aos="zoom-out-left">
            <div className="lunch" >
              <h1>Main Course</h1>
                <div className="images3">
                  <img id='img4' src={lunchimg} alt="" />
                </div>
            </div>
          </NavLink>
          {/* </div> */}
          {/* <div className="row2"> */}
          <NavLink to='/types/side dish'>
            <div className="dinner" data-aos="fade-up-right">
              <h1>Side Dish</h1>
                <div className="images4">
                  <img id='img5' src={dinnerimg} alt="" />
                </div>
            </div>
          </NavLink>
          <NavLink to='/types/dessert'>
            <div className="dessert" data-aos="fade-up">
              <h1>Dessert</h1>
                <div className="images5">
                  <img id='img6' src={dessertimg} alt="" />
                </div>
            </div>
          </NavLink>
          <NavLink to='/types/fingerfood'>
            <div className="fingerfood" data-aos="fade-up-left">
              <h1>FingerFood</h1>
                <div className="images6">
                  <img id='img7' src={fingerfood} alt="" />
                </div>
            </div>
          </NavLink>
          {/* </div> */}
      </div>
    </>
  )
}

export default Diffrecipes
