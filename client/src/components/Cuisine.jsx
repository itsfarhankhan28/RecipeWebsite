import React from 'react'
import './Cuisine.css'
import { NavLink } from 'react-router-dom'

const Cuisine = () => {
  return (
    <>
      <div class="wholecuisine">
        <h1 id='cuisinecardshead'>Also Search by Cuisine</h1>
        <div class="cuisinecards">
            <NavLink to='/diffcuisine/Indian'>
            <div class="cuisinecard1" data-aos="fade-right">
                <div class="cuisinecard1info">
                    <h1>Indian</h1>
                    <h3>The popular Indian dish, Chicken Tikka Masala was first made in Scotland in 1971</h3>
                </div>
            </div>
            </NavLink>
            <NavLink to='/diffcuisine/American'>
            <div class="cuisinecard2" data-aos="fade-up">
                <div className="cuisinecard2info">
                    <h1>American</h1>
                    <h3>American cuisine consists of the cooking style and traditional dishes prepared in the United States. </h3>
                </div>
            </div>
            </NavLink>
            <NavLink to='/diffcuisine/Thai'>
            <div class="cuisinecard3" data-aos="fade-left">
                <div className="cuisinecard3info">
                    <h1>Thai</h1>
                    <h3>Thai cuisine is a perfect blend of four seasonings – salty, sweet, sour, and spicy.</h3>
                </div>
            </div>
            </NavLink>
            <NavLink to='/diffcuisine/Mediterranean'>
            <div class="cuisinecard4" data-aos="fade-right">
                <div className="cuisinecard4info">
                    <h1>Mediterranean</h1>
                    <h3>Mediterranean cuisine is made up of processed staples where herbs and spices are essential ingredients.</h3>
                </div>
            </div>
            </NavLink>
            <NavLink to='/diffcuisine/Italian'>
            <div class="cuisinecard5" data-aos="fade-up">
                <div className="cuisinecard5info">
                    <h1>Italian</h1>
                    <h3>Italian cuisine consist of different ingredients like fruits, vegetables, grains, cheeses, meats and fish</h3>
                </div>
            </div>
            </NavLink>
            <NavLink to='/diffcuisine/European'>
            <div class="cuisinecard6" data-aos="fade-left">
                <div className="cuisinecard6info">
                    <h1>European</h1>
                    <h3>European food also tends to have more meats flour and starchy ingredients.</h3>
                </div>
            </div>
            </NavLink>
        </div>
    </div>
    </>
  )
}

export default Cuisine
