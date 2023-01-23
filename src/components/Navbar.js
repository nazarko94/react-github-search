import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-success navbar-expand-lg'>
      <div className='navbar-brand p-2'>
        Github Search
      </div>
      
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink exact to='/' className='nav-link'>
            Main
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
