import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import './Signup.css'
import registerbgimg from '../assets/registerbgimg.png'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
  const [register , setRegister] = useState({
    name:"" , surname:"" , email:"" , password:"" , cpassword:""
  })
  let name , value;
  const changedValue = (e)=>{
    name = e.target.name
    value = e.target.value

    setRegister({...register , [name]:value})
  }

  const onRegister = async (e)=>{
        e.preventDefault()

        const {name , surname , email , password , cpassword} = register

        const res = await fetch('https://recipe-website-o5qs.vercel.app/recipe/register' , {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name , surname , email , password , cpassword
            })
        })

        const data = res.json()

        if(data.status === 422 || !data){
            window.alert("Registration unseccessful")
            console.log("Registration unseccessful")
        }else{
            window.alert("Registration successful")
            console.log("Registration successful")

            navigate('/login')
        }
  }

  return (
    <>
    <Navbar/>
    <div class="registercontent">
        <div class="register">
            <div class="container1">
                <h1 id="signuphead">Sign Up</h1>
                <form method='POST'> 
                    <div class="form1">
                        <label for="name" id="name">
                            <i class="zmdi zmdi-account zmdi-hc-2x"></i>
                        </label>
                        <input type="text" id="nameinput" placeholder="Enter Name" name="name" onChange={changedValue} value={register.name}/>
                    </div>
                    <div class="form2">
                        <label for="name" id="name">
                            <i class="zmdi zmdi-account zmdi-hc-2x"></i>
                        </label>
                        <input type="text" id="nameinput" placeholder="Enter Surname" name="surname" onChange={changedValue} value={register.surname}/>
                    </div>
                    <div class="form3">
                        <label for="name" id="name">
                            <i class="zmdi zmdi-email zmdi-hc-2x"></i>
                        </label>
                        <input type="text" id="nameinput" placeholder="Enter Email" name="email" onChange={changedValue} value={register.email}/>
                    </div>
                    <div class="form4">
                        <label for="name" id="name">
                            <i class="zmdi zmdi-lock zmdi-hc-2x"></i>
                        </label>
                        <input type="password" id="nameinput" placeholder="Enter Password" name="password" onChange={changedValue} value={register.password}/>
                    </div>
                    <div class="form5">
                        <label for="name" id="name">
                            <i class="zmdi zmdi-lock zmdi-hc-2x"></i>
                        </label>
                        <input type="password" id="nameinput" placeholder="Confirm Password" name="cpassword" onChange={changedValue} value={register.cpassword}/>
                    </div>
                    <button id="register" onClick={onRegister}>SignUp</button>
                </form>
            </div>
            <div className="container2">
              <img id='registerbgimg' src={registerbgimg} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup
