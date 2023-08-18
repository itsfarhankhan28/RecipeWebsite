import React from 'react'
import { useEffect , useState } from 'react'
import Navbar from '../components/Navbar'
import './Viewrecipe.css'

const Viewrecipe = () => {

    const [userdetail , setUserdetail] = useState({})
    const [ingredient , setIngredient] = useState([])

    const viewrecipe = async()=>{
        const res = await fetch('https://recipe-website-o5qs.vercel.app/recipe/getuserdata',{
            method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
        })
        const data = await res.json()
        console.log(data)
        setUserdetail(data)
        console.log(userdetail)
        setIngredient(userdetail.addedrecipe)
        console.log(ingredient)
        // console.log(ingredient.map((items)=>{
        //     return items.ingredient
        // }))
    } 

    useEffect(()=>{
        viewrecipe()
    },[])

  return (
    <>
    <Navbar/>
      <div className="wholeview">
        <div className="viewrecipe">
            <div className="viewcontent">
            <div className="userdetails">
                <h1 id='userdetailshead'>Userdetails</h1>
                <div className="finaluserdetails">
                    <div className="finaldetails1">
                        <h2 id='detailshead1'>ID</h2>
                        <h3 id='detailsid'>{userdetail._id}</h3>
                    </div>
                    <div className="finaldetails2">
                        <h2 id='detailshead2'>Name</h2>
                        <h3 id='detailsname'>{userdetail.name}</h3>
                    </div>
                    <div className="finaldetails3">
                        <h2 id='detailshead3'>Email</h2>
                        <h3 id='detailsemail'>{userdetail.email}</h3>
                    </div>
                </div>
            </div>
            <div className="recipedetails">
                <h1 id='recipedetailshead'>Recipedetails</h1>
                {/* <h2>{ingredient.map((items)=>{
            return items.ingredient
        })}</h2> */}
                <div className="finalrecipedetails">
                    <div className="finalrecipe">
                        <h1>Reciepename</h1>
                        <h3>{ingredient.map((items)=>{
            return items.recipename
        })}</h3>
                    </div>
                    <div className="finalingredient">
                        <h1>Ingredient:-</h1>
                        <h4>{ingredient.map((items)=>{
            return items.ingredients
        })}</h4>
                    </div>
                    <div className="finalserving">
                        <h1>Serving:-</h1>
                        <h2><i id='servingfieldicon' class="zmdi zmdi-cutlery zmdi-hc-1x"></i> Serving: {ingredient.map((items)=>{
            return items.serving
        })}</h2>
                        <h1>ReadyInMinutes</h1>
                        <h2><i id='readyinMinuteicon' class="zmdi zmdi-time zmdi-hc-1x"></i> readyinMinute: {ingredient.map((items)=>{
            return items.readyinMinute
        })}</h2>
                    </div>
                    <div className="finalabout">
                        <h1>About Dish:-</h1>
                        <h3>{ingredient.map((items)=>{
            return items.methods
        })}</h3>
                    </div>
                    <div className="finalsteps">
                        <h1>Steps:-</h1>
                        <h3>{ingredient.map((items)=>{
            return items.steps
        })}</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Viewrecipe
