import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate()
    const getlogout = async()=>{
        try{
            const res = await fetch('/logout',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            })

            const data =await res.json()
            navigate('/login',{replace:true})
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getlogout()
    },[])

  return (
    <>
      
    </>
  )
}

export default Logout
