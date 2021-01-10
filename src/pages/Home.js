import React from 'react'

export const Home = () => { 
  return(
    <>
      <div className="welcome">
      <h1>Don't waste your own time, call us!</h1> 
      </div>  

      <div className ="icons">
        <img className ="" alt="clock" src={require('../images/wall-clock.svg')} />
        <img className ="" alt="clock" src={require('../images/tick.png')} />
        <img className ="" alt="clock" src={require('../images/no-preservatives.png')} />
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
                  <p className="small-header"> We take care of :</p> 
                   <ul> 
                    <li>Your house</li>
                    <li>House cleaning </li>
                    <li>Moving furniture</li>
                    <li>Key holders</li>
                    <li>Gardening </li>
                    <li>Home styling</li>
                  </ul>
                </div>
            </div>
            <div className="home-style">
            <img className ="citrus" alt="citrus" src={require('../images/dalarna.jpg')} />
              <div className="header-style">
                <p className="small-header"> We provide : </p>  
                <ul> 
                    <li>Long distance move</li>
                    <li>Storage</li>
                    <li>Pool cleaning </li>
                  </ul>
              </div>
          </div>
       </section>
     </>  
    )
}