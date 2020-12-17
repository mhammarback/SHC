import React from 'react'

export const Contact = () => {
    return (
        <section className="contact">
            <h1> Don't waste your own time, contact us!</h1>
            <div className="container">
              <p>Email: lallahahahl@gmla.com </p>
              <p>Phone: +46 7564 45406 </p>
            </div>
            <img className ="car" alt="our car" src={require('../images/car.jpg')} />

           
        </section>
    )
}