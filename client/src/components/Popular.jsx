import React from 'react'
import { useState , useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

const Popular = () => {

  const [fetcheddata , setFetcheddata] = useState([])

  const getData = async () =>{

    const storageData = localStorage.getItem("popular")

  if(storageData){
    setFetcheddata(JSON.parse(storageData))
  }
  else{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json()
    localStorage.setItem("popular" , JSON.stringify(data.recipes))
    console.log(data)
    setFetcheddata(data.recipes)
  }
  }

  useEffect( () =>{
    getData()
  }, [] )

  return (
    <div>
    <h1>Popular Recipe's</h1>
    <Splide options={{
      perPage: 4,
      arrows: false,
      pagination: false,
      drag: "free",
      gap: "5rem"
    }}>
    {fetcheddata.map((recipes) =>{
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

export default Popular
