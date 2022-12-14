import React from 'react'
import './App.css'
import Herosection from '../components/Herosection'
import Navbar from '../components/Navbar'
import Popular from '../components/Popular'
import Veggies from '../components/Veggies'
import Recipetypes from '../components/Recipetypes'
import Diffrecipes from '../components/Diffrecipes'
import Chefs from '../components/chefs'
import Footer from '../components/Footer'
import Cuisine from '../components/Cuisine'

const Page1 = () => {
  return (
    <>
    <Herosection/>
    <div className="heroContent">
      <Diffrecipes/>
    </div>
    <div className="cuisine">
      <Cuisine/>
    </div>
    <div className="chefs">
      <Chefs/>
    </div>
    <div className="bodyfooter">
      <Footer/>
    </div>
    </>
  )
}

export default Page1
