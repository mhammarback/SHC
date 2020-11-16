import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return(
        <header>
            <NavLink to ="/" className="nav-links">
            <img alt="dekal" src={require('../images/logga.jpg')} />
            </NavLink>
            <nav>
              <NavLink to="/about" exact className="nav-links">
                  About
              </NavLink>
              <NavLink to="/contact" exact className="nav-links">
                  Contact
              </NavLink>   
            </nav>
        </header>
    )
}