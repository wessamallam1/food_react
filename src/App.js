import React from 'react';
import './App.scss';
import Home from './pages/home';
import Navbar from './pages/NavBar/Navbar';
import Contact from "./pages/Contact/contact";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Home/>
      
      <Contact/>
      
    </React.Fragment>
  );
}

export default App;
