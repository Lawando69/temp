import React from 'react';
import './App.css';
import Home from './Pages/Home.js'
import Offers from './Pages/Offers'
import About from './Pages/About.js'
import Contact from './Pages/Contact.js'
import Women from './Pages/Women.js'
import Kids from './Pages/Kids.js'
import Men from './Pages/Men.js'
import CustomDesign from './Pages/Custom-design.js'
import NavBar from './Components/Navbar.js'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className='App'>
    <Router>
      <NavBar />
      <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/Offers' exact Component={Offers} />
          <Route path='/Men' exact Component={Men} />
          <Route path='/Women' exact Component={Women} />
          <Route path='/Kids' exact Component={Kids} />
          <Route path='/Custom-design' exact Component={CustomDesign} />
          <Route path='/About' exact Component={About} />
          <Route path='/Contact' exact Component={Contact} />
      </Routes>
    </Router>

 </div>
  );
}

export default App;




