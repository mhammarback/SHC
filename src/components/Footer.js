import React from 'react'


export const Footer = () => {
    return (
        <footer>
            <div className="links">
              <img className="logo" alt="facebook-logo" src={require('../images/facebook.svg')} />
              <img className ="logo" alt="instagram-logo" src={require('../images/instagram.svg')} />
            </div>
            <div className="dekal">
              <img alt="dekal" src={require('../images/dekal.png')} />
            </div>
              
        </footer>
    )
}