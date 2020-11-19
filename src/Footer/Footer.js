import React from 'react';

// If component does not need state, it can be a function statement

const Footer = () =>{
  const style = {
    height: '15vh',
    backgroundColor: 'lightslategray'
  }
  return (
    <div id='footer' className='container-fluid' style={style} >
      Footer
    </div>
  )
}



export default Footer;