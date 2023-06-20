import React from 'react';
import './App.css';
import Home from './Pages/Home-page.js'
import Offers from './Pages/Offers-page.js'
import About from './Pages/About-page.js'
import Contact from './Pages/Contact-page.js'
import Women from './Pages/Women-page.js'
import Kids from './Pages/Kids-page.js'
import Men from './Pages/Men-page.js'
import Sport from './Pages/Sport-page.js'
import NavBar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
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
          <Route path='/Sport' exact Component={Sport} />
          <Route path='/About' exact Component={About} />
          <Route path='/Contact' exact Component={Contact} />
      </Routes>
      <Footer />
    </Router>

 </div>
  );
}

export default App;




