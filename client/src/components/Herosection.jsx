import React from 'react'
import Navbar from './Navbar'
import shake2img from '../assets/shake2img.png'
import herosectionimg1og from '../assets/herosectionimg1og.png'
import dessertimg from '../assets/dessertimg.png'
import fingerfoodimg from '../assets/fingerfoodimg.png'
import herosectionimg2 from '../assets/herosectionimg2.png'
import './Herosection.css'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="bodycontent">
        <div className="images">
            <img id="heroimg2" src={herosectionimg2} alt=""/>
            <img id="heroimg3" src={shake2img} alt=""/>
            <img id='heroimg5' src={dessertimg} alt="" />
            <img id='heroimg6' src={fingerfoodimg} alt="" />
        </div>
    </div>
    <div className="bodycontent1">
        <h1 id="mainheading"> All <br /> About <br /> Recipes</h1>
        <img id="heroimg4" src={herosectionimg1og} alt=""/>
        <p id='webaim'>'Our website helps you and your friends cook amazing food with the help of recipes <br />You can not only search for certain recipe but also share your own recipes with others through this website' </p>
    </div>
    </>
  )
}

export default Home
