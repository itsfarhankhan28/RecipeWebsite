import React from 'react'
import { useState , useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

const Veggies = () => {

    const [veggies , setVeggies] = useState([])

  const getVeggies = async () =>{

    const storageDataV = localStorage.getItem("veggies")

  if(storageDataV){
    setVeggies(JSON.parse(storageDataV))
  }
  else{
    const apiVeg = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tag=vegetarian`)
    const dataVeg = await apiVeg.json()
    localStorage.setItem("veggies" , JSON.stringify(dataVeg.recipes))
    console.log(dataVeg)
    setVeggies(dataVeg.recipes)
  }
  }

  useEffect( () =>{
    getVeggies()
  }, [] )

  return (
    <div>
    <h1>Vegetarian Recipe's</h1>
    <Splide options={{
      perPage: 4,
      arrows: false,
      pagination: false,
      drag: "free",
      gap: "5rem"
    }}>
    {veggies.map((recipes) =>{
      return(
        <>
        <SplideSlide>
      <div id="recipecontent">
        <h5>{recipes.title}</h5>
        <img id='recipeimg' src={recipes.image} alt={recipes.title} />
      </div>
      </SplideSlide>
      </>
      )
    })}
    </Splide>
</div>
  )
}

export default Veggies
