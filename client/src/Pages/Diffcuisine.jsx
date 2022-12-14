import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Diffrecipes from '../components/Diffrecipes'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './Diffcuisine.css'

const Diffcuisine = () => {

    const[cuisinerep , setCuisisnerep] = useState([])

    const cuisineType = useParams()

    const getcuisine =async (cuisine)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${cuisine}&number=6`)
        const diffcuisine = await data.json()
        setCuisisnerep(diffcuisine.results)
        console.log(diffcuisine.results)
    }

   useEffect(()=>{
    getcuisine(cuisineType.type)
   },[cuisineType.type])

  return (
    <>
      <Navbar/>
      <div className="foodcard">
      {cuisinerep.map((items)=>{
        return(
            <>
            <NavLink to={'/cuisinedetails/' + items.id}>
            <div className="card" data-aos="flip-left">
            {/* <li>{items.title}</li> */}
            <img id='img' src={items.image} alt="" />
            <div className="subcontent">
              <h2>{items.title}</h2>
            </div>
            </div>
            </NavLink>
            </>
        )
      })}
      </div>
      <div className="heroContent">
        <Diffrecipes/>
      </div>
      <div className="bodyfooter">
        <Footer/>
      </div>
    </>
  )
}

export default Diffcuisine
