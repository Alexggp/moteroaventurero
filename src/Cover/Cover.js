import React from 'react';
import Logo from '../assets/logo.jpg'
// If component does not need state, it can be a function statement

const Cover = () =>{
  const style = {
    height: '94vh',
    backgroundColor: 'lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const imageStyle = {
    width: '30%'
  }
  return (
    <div id='cover' className='container-fluid' style={style} >
      <img src={Logo} className="Logo" alt="" style={imageStyle}/>
    </div>
  )
}



export default Cover;