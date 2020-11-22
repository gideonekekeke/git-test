import React from 'react'
import './body.css'
import Pixs from './img/iphone2.png'
import pic from './img/e1.png'

function Body() {
    return (
        <div className ='Body'>
            <div className = 'body_content'>
                <h1>FEATURE</h1>
               <img alt = 'img'src = {Pixs} />
            </div>
           
                 <div className = 'unlock'>
                 UNLOCK THE BEST
                 </div>
                 <div className ='app'>
                 <h3>App Feature Here</h3>
                  </div>
                  <div className = 'writing'>Lorem ipsum dolor sit amet, consectetur adipisicing e</div>

                 <div className = 'context'>
                     <img className = 'picture' ></img>
                     <h4> Light weight and super fast</h4>
                 </div>
                 <div className = 'context'>
                     <img className = 'picture' ></img>
                     <h4> Light weight and super fast</h4>
                 </div>
                 
                 <div className = 'context'>
                     <img  className = 'picture' ></img>
                     <h4> Light weight and super fast</h4>
                 </div>
                 <div className = 'context'>
                     <img  className = 'picture' ></img>
                     <h4> Light weight and super fast</h4>
                 </div>







        </div>
    )
}

export default Body
