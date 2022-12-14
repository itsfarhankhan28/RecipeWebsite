import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Types.css'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'
import Diffcuisine from './Diffcuisine'
import Cuisine from '../components/Cuisine'
import Footer from '../components/Footer'

const Types = () => {

    const[oldrecipe , setoldrecipe] = useState([])

    const recipeType = useParams()

    const getReqRecipe = async (name)=>{
        const reqRecipe = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${name}&number=6`)
        const changedRecipe = await reqRecipe.json();
        console.log(changedRecipe)
        setoldrecipe(changedRecipe.results)
    }

    useEffect(()=>{
        getReqRecipe(recipeType.type)
        console.log(recipeType.type)
    },[recipeType.type])

  return (
    <>
    <div className="nav">
    <Navbar/>
    </div>
    <div className="foodcard">
        {oldrecipe.map((items)=>{
            return(
                <>
                <NavLink to={'/details/' + items.id }>
        <div className="card" data-aos="flip-left">
                <img id='img' src={items.image} alt="" />
                <div class="subcontent">
                    <h2>{items.title}</h2>
                </div>
        </div>
        </NavLink>
       </>
       )
        })}
    </div>
    <div className="cuisine">
    <Cuisine/>
    </div>
    <div className="bodyfooter">
        <Footer/>
    </div>


    {/* <div class="recipecard">
        <div class="content1">
            <img id="cardimg" src="./IMG/foodcardimg.jpg" alt="">
            <div class="subcontent">
                <h1>food name</h1>
            </div>
        </div>
    </div> */}
    </>
  )
}

export default Types
