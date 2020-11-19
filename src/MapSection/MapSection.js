import React from 'react';

// If component does not need state, it can be a function statement

const MapSection = () =>{
  const mapSectionStyle = {
    height: '60vh',
    backgroundColor: 'rosybrown',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const buttonStyle = {
    height: '75px',
    width: '200px',
    backgroundColor: 'lightblue',
    cursor: 'pointer',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5em'
  }

  return (
    <div id='mapSection' className='container-fluid' style={mapSectionStyle} >
      <div class='mapSectionButton' style={buttonStyle}>Ver Rutas</div>
    </div>
  )
}



export default MapSection;