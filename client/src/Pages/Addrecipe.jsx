import React from 'react'
import Navbar from '../components/Navbar'
import './Addrecipe.css'
import addrecipeimg from '../assets/addrecipeimg.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Addrecipe = () => {

    const navigate = useNavigate()

    const [addedrecipe , setAddedrecipe] = useState({
        recipename:"" , serving:"" , readyinMinute:"" , ingredients:"" , methods:"" , steps:""
    })
    const [username , setUsername] = useState({})
    const [userrecipe , setUserrecipe] = useState([])
    let name , value
    const onchangerecipe = (e)=>{
        name = e.target.name
        value = e.target.value

        setAddedrecipe({...addedrecipe , [name]:value})
    }

    const addRecipe =async (e)=>{
        e.preventDefault()

        const {recipename , serving , readyinMinute , ingredients , methods , steps} = addedrecipe

        const res = await fetch('/addrecipe' , {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                recipename , serving , readyinMinute , ingredients , methods , steps
            })
        })

        const data =await res.json()
        console.log(data)

        if(!data || data.status == 422){
            window.alert("Problem in adding recipe")
            console.log("Problem in adding recipe")
        }else{
            window.alert("Recipe added successfully")
            console.log("Recipe added successfully")
            navigate('/viewrecipe')
        }
    }

    const getusername =async ()=>{
        const res = await fetch('/getuserdata',{
            method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
        })
        const data = await res.json()
        // console.log(data)
        setUsername(data)
        // setUserrecipe(username.addedrecipe[0])
        // console.log(userrecipe.map((items)=>{
        //     return items.ingredients
        // }))
    }

    useEffect(()=>{
        getusername()
    },[])

  return (
    <div>
      <Navbar/>
      <div className="wholeaddrecipe">
        <div className="adduserrecipe">
            <div className="addrecipeimg">
                <img src={addrecipeimg} alt="" />
            </div>
            <div className="addrecipeform">
                <h1 id='addformheading'>Welcome {username.name}</h1>
                <h2 id='addrecipeformhead'>Add Your Recipe Here</h2>
                <form method='POST'>
                    <div className="formfields">
                    <div className="formfield1">
                            <label htmlFor="recipename">
                            <i id='servingfieldicon' class="zmdi zmdi-cutlery zmdi-hc-2x"></i>
                            </label>
                            <input type="string" name='recipename' placeholder='Add Recipe Name here' onChange={onchangerecipe} value={addedrecipe.recipename} />
                        </div>
                        <div className="formfield1">
                            <label htmlFor="serving">
                            <i id='servingfieldicon' class="zmdi zmdi-cutlery zmdi-hc-2x"></i>
                            </label>
                            <input type="string" name='serving' placeholder='Add Servings here' onChange={onchangerecipe} value={addedrecipe.serving} />
                        </div>
                        <div className="formfield2">
                            <label htmlFor="readyinMinute">
                                <i id='readyinMinuteicon' class="zmdi zmdi-time zmdi-hc-2x"></i>
                            </label>
                            <input type="string" name='readyinMinute' placeholder='Add RedyinMinute here' onChange={onchangerecipe} value={addedrecipe.readyinMinute} />
                        </div>
                        <div className="formfield3">
                            <label htmlFor="ingredients">
                                <i id='ingredientsicon' class="zmdi zmdi-pizza zmdi-hc-2x"></i>
                            </label>
                            <input type="text" name='ingredients' placeholder='Add Ingredients here' onChange={onchangerecipe} value={addedrecipe.ingredients} />
                        </div>
                        <div className="formfield4">
                            <label htmlFor="methods">
                                <i id='methodsicon' class="zmdi zmdi-assignment zmdi-hc-2x"></i>
                            </label>
                            <input type="text" name='methods' placeholder='Add About Dish here' onChange={onchangerecipe} value={addedrecipe.methods}/>
                        </div>
                        <div className="formfield5">
                            <label htmlFor="steps">
                                <i id='stepsicon' class="zmdi zmdi-book zmdi-hc-2x"></i>
                            </label>
                            <input type="text" name='steps' placeholder='Add Steps here' onChange={onchangerecipe} value={addedrecipe.steps} />
                        </div>
                    </div>
                    <button onClick={addRecipe} id="addrecipebtn">
                        Add Recipe
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Addrecipe
