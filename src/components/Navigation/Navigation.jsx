import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router'

const Navigation = () => {
  return (
    <nav>
        <div className='nav__logo'><h1>Flux Wear</h1></div>
        <ul className='nav__list'>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="collection"><li>Collection</li></NavLink>
            <NavLink to="about"><li>About</li></NavLink>
            <NavLink to="contact"><li>Contact</li></NavLink>
        </ul>
        <div className='nav__icons'>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
        </div>
    </nav>
  )
}

export default Navigation