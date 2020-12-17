import React from 'react'

export const About = () => { 
    return(
        <section className="about-container">
          <h1>About us</h1>
          <img className ="citrus" alt="citrus" src={require('../images/dalarna.jpg')} />
            <div className="about-text">
              <p>more text about
                 more text about
                 more text about
                 more text about
                 more text about
              </p>
            </div> 
            <img className ="citrus" alt="citrus" src={require('../images/dalarna.jpg')} />
            <div className="about-text">
              <p className ="about-header">About us:</p>
              <p>more text about
                 more text about
                 more text about
                 more text about
                 more text about
              </p>
            </div> 
            <img className ="citrus" alt="citrus" src={require('../images/dalarna.jpg')} />
            <div className="about-text">
              <p className ="about-header">About us:</p>
              <p>more text about
                 more text about
                 more text about
                 more text about
                 more text about
              </p>
            </div>    
        </section>
    )
}