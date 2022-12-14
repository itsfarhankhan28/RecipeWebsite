import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Details.css'

const Details = () => {

    const [details , setDetails] = useState({});
    const [ingerdient , setIngredient] = useState([])
    const [finalingredient , setFinalingredient] = useState([])
    const [diets , setDiets] = useState([])
    const [dishtypes , setDishtypes] = useState([])
    const params = useParams();

    const showDetails = async ()=>{
        const fetchdetail = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data = await fetchdetail.json()
        setIngredient(data.analyzedInstructions)
        console.log(data.analyzedInstructions)
        setFinalingredient(data.extendedIngredients)
        console.log(finalingredient)
        setDiets(data.diets)
        console.log(diets)
        setDishtypes(data.dishTypes)
        console.log(dishtypes)
        setDetails(data)
        console.log(data)
    }

    useEffect(()=>{
        showDetails()
    },[params.name])

  return (
    <>
    <div>
      <Navbar/>
      <div class="addrecipe">
          <div class="foodname">
              <h1>{details.title}</h1>
          </div>
          <div class="foodimage">
              <img id="foodcard" src={details.image} alt=""/>
              <div class="foodinfo">
                  <div className="serving">
                  <i id='servingicon' class="zmdi zmdi-cutlery zmdi-hc-3x"></i>
                    <h1 id='servinghead'>Servings:{details.servings}</h1>
                  </div>
                  <div className="cooktime">
                    <i id='cooktimeicon' class="zmdi zmdi-time zmdi-hc-3x"></i>
                    <h1 id='cooktimehead'>ReadyInMinutes:{details.readyInMinutes}</h1>
                  </div>
                  <div className="otherinfo">
                    <h1>other</h1>
                  </div>
              </div>
          </div>
          <div class="foodrecipe">

            <div className="inforow">
              <div class="foodingredient" data-aos="fade-right">
                <h1>Ingredients:-</h1>
                <div className="listofing">
                  {finalingredient.map((item)=>{
                    return(
                      <li>{item.aisle}</li>
                    )
                  })}
                </div>
              </div>
              <div class="fooddiet" data-aos="fade-up">
                  <h1>Diets:-</h1>
                  <div className="listofdiets">
                    {diets.map((items)=>{
                      return(
                        <li>{items}</li>
                      )
                    })}
                  </div>
              </div>
              <div className="dishtype" data-aos="fade-left">
                    <h1>DishTypes:-</h1>
                    <div className="listofdishtypes">
                      {dishtypes.map((items)=>{
                        return(
                          <li>{items}</li>
                        )
                      })}
                    </div>
              </div>
            </div>
              <div class="foodsteps" data-aos="fade-right">
                <h1>Steps:-</h1>
                <div className="stepslist">
                { ingerdient.map((item)=>{
          return( 
            <h3>{item.steps.map((step)=>{
              return(
                <li>{step.step}</li>
              )
            })}</h3>
        )})}
                </div>
              </div>
              <div className="repsummary" data-aos="fade-left">
                <h1 id='summary'>Summary</h1>
                <h3 id='summarycontent' dangerouslySetInnerHTML={{__html: details.summary}}></h3>
              </div>
          </div>
      </div>
    {/* <div class="wholedetail">
        <div class="ingredients" data-aos="fade-left">
            <h1 id="calories">Calories</h1>
            <h1 id="headinginge">Ingredients:</h1>
            <p id="contentinge">
                { ingerdient.map((item)=>{
          return( 
            <h3>{item.steps.map((step)=>{
              return(
                <li>{step.step}</li>
              )
            })}</h3>
        )})}
            </p>
        </div>
        <div class="image" data-aos="fade-right"> 
            <img id="recipeimg" src={details.image} alt=""/>
        </div>
        <div class="info">
            <h1 id="recipename">{details.title}</h1>
            <h1 id='summary'>Summary</h1>
            <h3 id='summarycontent' dangerouslySetInnerHTML={{__html: details.summary}}></h3>
        </div>
    </div> */}
    </div> 
      </>
  )
}

export default Details
