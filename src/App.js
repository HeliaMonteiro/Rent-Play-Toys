import React from 'react'
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import ToyList from './components/ToyList/ToyList'


import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Information />
      <ToyList/>
      <Footer />
    </div>
  );
}

export default App;
