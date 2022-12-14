import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Navbar = () => {

  const [mysearch , setMysearch] = useState("")
  const [username , setUsername] = useState({})
  const [show , setShow] = useState(false)

  const url = useNavigate()

  const search = (e)=>{
    e.preventDefault();
    url('/types/'+mysearch)
  }

  const getusername =async ()=>{
      try{
        const res = await fetch('/profile',{
          method:"GET",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          credentials:"include"
      })

      const data =await res.json()
      setUsername(data)
      setShow(true)
      }catch(err){
        console.log(err)
      }
  }

  useEffect(()=>{
    getusername()
  },[])

  return (
    <>
    <header>
        <nav>
          <h1 id='head'>All About Recipes</h1>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <div class="dropdown">
              <button class="dropbtn">RECIPES</button>
              <div class="dropdown-content">
                <li><Link to='/types/drink'>Drinks</Link></li>
                <li><Link to='/types/breakfast'>Breakfast</Link></li>
                <li><Link to='/types/main course'>Main Course</Link></li>
                <li><Link to='/types/side dish'>Side Dish</Link></li>
              </div>
            </div>
            <li><Link to='/about'>ABOUTUS</Link></li>
            <li><Link to='/contact'>CONTACTUS</Link></li>
          </ul>
          <form onSubmit={search}>
            <FaSearch/>
            <input placeholder='Search by cuisine or type' onChange={(e)=>setMysearch(e.target.value)} id='searchRecipe' type="search" value={mysearch} />
          </form>
          <div class="accdropdown">
            <i id='accdropbtn' class="zmdi zmdi-account zmdi-hc-4x"></i>
            <div class="accdropdown-content">
              <Link to='/login'>LOGIN</Link>
              <Link to='/signup'>SIGNUP</Link>
              <Link to='/profile'>PROFILE</Link>
              <Link to='/logout'>LOGOUT</Link>
              <Link to='/addrecipe'>ADD RECIPE</Link>
              <Link to='/viewrecipe'>VIEW RECIPE</Link>
            </div>
          </div>
          <h1 id='accountname'>{ show ? `Welcome ${username.name}` : 'Create Account'}</h1>
        </nav>
    </header>
    </>
  )
}

export default Navbar
