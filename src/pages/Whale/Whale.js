import React from 'react';
import {Link,Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Whale() {
  
  return(
    <div className="page-heading">
        <h1>Whale</h1>
        <div>
          <NavLink to="/beluga">Beluga-Whale</NavLink> <br/>
          <NavLink to="/blue">Blue-Whale</NavLink>
      </div>
      <Outlet />  
    </div>
  )
}