import React from 'react'

export const Home = () => { 
    return(
       <>
       <div className="welcome">
         <img className ="large-logga" alt="dekal" src={require('../images/logga.jpg')} />
          <h1>Don't waste your own time,call us!</h1>
           
       </div>  
       <section className="container">
          <div className="home-style">
            <img className ="citrus" alt="citrus" src={require('../images/dalarna.jpg')} />
              <div className="header-style">
                <p className="small-header"> We are a Swedish company based in Torreveija, Spain!</p>  
                <p> here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                </p>
              </div>
          </div>
            <div className="home-style-opposite">
              <img className ="citrus" alt="citrus" src={require('../images/dalarna.jpg')} />
                <div className="header-style">
                  <p className="small-header"> What we do:</p> 
                   <p> here comes more info about us
                       here comes more info about us
                       here comes more info about us
                       here comes more info about us
                       here comes more info about us
                       here comes more info about uS
                  </p>
                </div>
            </div>
            <div className="home-style">
            <img className ="citrus" alt="citrus" src={require('../images/dalarna.jpg')} />
              <div className="header-style">
                <p className="small-header"> We also: </p>  
                <p> here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                    here comes more info about us
                </p>
              </div>
          </div>
       </section>
     </>  
    )
}