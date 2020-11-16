import React from 'react'

export const About = () => { 
    return(
        <div className="about-container">
          <img className ="citrus" alt="citrus" src={require('../images/citrus2.jpg')} />
            <div className="about-text">
              <p className ="about-header">About us:</p>
              <p>more text about
                 more text about
                 more text about
                 more text about
                 more text about
              </p>
            </div>
            
        </div>
    )
}