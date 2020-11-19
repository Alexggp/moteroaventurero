import React from 'react';
import './App.css';
import Header from './Header/Header';
import Cover from './Cover/Cover';
import BikesCardsContainer from './BikeCardsContainer/BikesCardsContainer';
import MapSection from './MapSection/MapSection'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cover></Cover>
      <BikesCardsContainer></BikesCardsContainer>
      <MapSection></MapSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
