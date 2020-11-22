import React from 'react'
import './card.css'
import Picture from './img/s1.png'

function Carditems() {
    return (
        <>
        <div className ='cards'>

            <div className ='text'> 
               <h2>Best Design</h2>
            </div>
            <div className = 'image'>
            <img src = {Picture} alt = 'image'></img>
            </div>
            <p>Lorem ipsum dolor
                 sit amet, consectetur adipisici
                 huskkd,kbf,onk;gokn</p>

                 <div className = 'btn'>
                 <button>Read More</button>
                 </div>
        </div>

      

        </>
    )
}

export default Carditems
