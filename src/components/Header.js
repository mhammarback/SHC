import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return(
        <header>
            <nav>
            <NavLink to ="/" className="nav-links">
                Home
            </NavLink>
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

//            <img alt="dekal" src={require('../images/logga.jpg')} />
//<img className ="large-logga" alt="dekal" src={require('../images/Profilbild2.jpg')} />
