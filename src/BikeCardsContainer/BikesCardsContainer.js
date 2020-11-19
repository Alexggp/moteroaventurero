import React from 'react';
import BikeCard from '../BikeCard/BikeCard';
// If component does not need state, it can be a function statement

const BikesCardsContainer = () =>{
  const style = {
    backgroundColor: 'lightblue',
    padding: '50px'
  }
  return (
    <div id='bikesCardsContainer' className='container-fluid' style={style} >
      <div className="row">
        <div className='col-md-3'>
          <BikeCard></BikeCard>
        </div>
        <div className='col-md-3'>
          <BikeCard></BikeCard>
        </div>
        <div className='col-md-3'>
          <BikeCard></BikeCard>
        </div>
        <div className='col-md-3'>
          <BikeCard></BikeCard>
        </div>
      </div>
    </div>
  )
}



export default BikesCardsContainer;