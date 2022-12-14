import './Recipetypes.css'
import React from 'react'
import {GiFullPizza , GiBurn} from 'react-icons/gi'
import {FaHamburger , } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Recipetypes = () => {
  return (
    <>
    <div className="wholerecipes">
        <div className="recipes">
            <NavLink to='/types/main course'>
                <FaHamburger/>
                <h4>Main Course</h4>
            </NavLink>
            <NavLink to='/types/breakfast'>
                <GiBurn/>
                <h4>BreakFast</h4>
            </NavLink>
            <NavLink to='/types/side dish'>
                <GiFullPizza/>
                <h4>SideDish</h4>
            </NavLink>
        </div>
    </div>
    </>

  )
}

export default Recipetypes
