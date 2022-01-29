
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import HomeComponent from './router-simple/home-component';
import AboutComponent from './about-component';
import Sanju from './home-component';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/home1" element={<Sanju/>}/>
        
        <Route path="/router-simple" element = {<HomeComponent/>}/>
      </Routes>

    </Router>
  );
}

export default App;
