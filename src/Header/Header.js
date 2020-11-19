import React from 'react';

// If component does not need state, it can be a function statement

const Header = () =>{
  const style = {
    height: '6vh',
    backgroundColor: 'lightcoral'
  }
  return (
    <div id='header' className='navbar navbar-expand navbar-dark sticky-top flex-column flex-md-row bd-navbar' style={style} >
      Header
    </div>
  )
}



export default Header;