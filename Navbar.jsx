import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
      <div className='home'>
      <NavLink to="/" >
        Home
      </NavLink>
      <NavLink to="/pastes">
        Pastes
      </NavLink>
      </div>
    </div>
  )
}

export default Navbar
