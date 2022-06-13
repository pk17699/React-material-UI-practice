import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Banner from './Components/Banner/banner';
import CardDisplay from './Components/Cards/cards';
import Body from './Components/Body/body';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <br></br>
      <CardDisplay />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
