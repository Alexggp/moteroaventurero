import React from 'react';
import './BikeCard.css';
import image from '../assets/bike.jpg'
// If component does not need state, it can be a function statement

const Bike = (props) =>{

  return (
    
    
      <div className = "bikeCard">
        <div className="bikeImageContainer">
        <img src={image} className="bikeImage" alt="" />
        </div>
        <div className="bikeImageCaption">
          En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no hace tiempo que vivía un hidalgo.
        </div>
      </div>
      
  )
}



export default Bike;