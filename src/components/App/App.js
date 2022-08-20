import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from '../../Navbar/Navbar'
import Home from '../../pages/Home/Home';
import Manatee from '../../pages/Manatee/Manatee';
import Narwhal from '../../pages/Narwhal/Narwhal';
import Whale from '../../pages/Whale/Whale';
import Beluga from '../../pages/Whale/Beluga';
import Blue from '../../pages/Whale/Blue';
import Clock from '../../pages/Clock/clock';

function App() {
  return (
    <div className="container-flex">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route path="/manatee" element={<Manatee/>} /> 
          <Route path="/narwhal" element = {<Narwhal />} />
          <Route path="/whale" element={<Whale />} />
            <Route path="/beluga" element={<Beluga />} />
            <Route path="/blue" element={<Blue/>}/>
          <Route path="/clock" element={<Clock/>}/> 
      </Routes>

          <footer>
            <h1>Connect to us!!</h1>
          </footer>
    </div>
  );
}

export default App;
