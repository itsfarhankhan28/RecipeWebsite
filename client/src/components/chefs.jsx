import React from 'react'
import './chefs.css'

const chefs = () => {
  return (
    <>
        <div className="aboutchef">
            <h1 id='chefheading'>Chefs With The Most Michelin Stars</h1>
            <div className="chefscard">
            <div id="chef1" data-aos="fade-right">
                <div id="foodimg1">
                </div>
                <div id="chefimage1"></div>
                <p><h1 id="name1">Yannick Alleno</h1>
                <h3 id="chefinfo1">His Alléno Paris au Pavillon Ledoyen is one of the oldest restaurants in Paris, situated in the Champs – Élysées gardens. It’s a constellation of Michelin stars, featuring three star-rated restaurants in the French Michelin Guide 2020.</h3> </p>
            </div>
            <div id="chef2" data-aos="fade-down">
                <div id="foodimg2">
                </div>
                <div id="chefimage2"></div>
                <p><h1 id="name2">Gordon Ramsay</h1>
                <h3 id="chefinfo2">He is arguably the most famous chef in the world. Although he’s been awarded 16 Michelin stars throughout his career, he currently holds seven. His signature restaurant, Restaurant Gordon Ramsay in London, has held 3 stars since 2001, making it London’s longest-running three Michelin-starred restaurant.</h3> </p>
            </div>
            <div id="chef3" data-aos="fade-left">
                <div id="foodimg3">
                </div>
                <div id="chefimage3"></div>
                <p><h1 id="name3">Heinz Beck</h1>
                <h3 id="chefinfo3">He is perhaps best known for being the man behind Rome’s only three-Michelin-starred restaurant, La Pergola. Beyond an excellent career as a highly decorated chef, Heinz has been heralded as a leader in Italian and Mediterranean culinary tradition.</h3> </p>
            </div>
            </div>
        </div>
    </>
  )
}

export default chefs
