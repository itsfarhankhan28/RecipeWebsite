import React from 'react'
import './Profile.css'
import profilebgimg from '../assets/profilebgimg.png'
import Navbar from '../components/Navbar'
import { useEffect ,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const [userdata , setUserdata] = useState({})
    const navigate = useNavigate()
    const navigatetoaddrecipe = useNavigate()
    const navigatetoviewrecipe = useNavigate()
    const authprofile = async()=>{
        try{
            const res = await fetch('https://recipe-website-o5qs.vercel.app/recipe/profile',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            })

            const data =await res.json()
            console.log(data)
            setUserdata(data)

        }catch(err){
            console.log(err)
            navigate('/login')
        }
    }

    useEffect(()=>{
        authprofile()
    },[])

    const navigateTo = ()=>{
        navigatetoaddrecipe('/addrecipe')
    }

    const navigateToView = ()=>{
        navigatetoviewrecipe('/viewrecipe')
    }

  return (
    <>
    <Navbar/>
      <div className="wholeprofile">
      <form>
        <div className="profilecard">
            <div className="part1">
                <img src={profilebgimg} alt=""/>
            </div>
            <div className="part2">
                <div className="username">
                    <h1 id="chefname">{userdata.name}</h1>
                </div>
                <div className="userdetail">
                    <div className="field">
                        <h1>User's Details</h1>
                        <div className="fielddetail">
                            <h2>ID:</h2>
                            <h2>Name:</h2>
                            <h2>Surname:</h2>
                            <h2>Email:</h2>
                        </div>
                    </div>
                    <div className="values">
                       <div className="valuesdetail">
                            <h2>{userdata._id}</h2>
                            <h2>{userdata.name}</h2>
                            <h2>{userdata.surname}</h2>
                            <h2>{userdata.email}</h2>
                       </div>
                       <button onClick={navigateTo} id="adddishbtn">Add your recipe</button>
                       <button onClick={navigateToView} id="viewrecipebtn">View your recipe</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Profile
