import React from 'react';
import './App.css';
import { About, Footer, Header, Skills, Navbar, Work } from './components';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
    </div>
  );
}

export default App;
