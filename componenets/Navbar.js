import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar() { 
    const [click, setClick] = useState(false)
    return (
    
    <div className="nav__container">
      <div className="nav__containerWrapper">
          <div className="nav__containerWrapperLogo">Apkly</div>
           <div className="nav__containerWrapperContent">
           <div className="nav__containerWrapperLink">
               <div className = 'container_link'>
                   <Link to="/">Home</Link>
                     </div>
                       <div className = 'container_link1'>
                    <Link to="/about"> About</Link>
                     </div>
                    <div className = 'container_link2'>
                       <Link to="/contact"> Contact</Link>
              </div>
          </div> 
          </div>
        </div>
    </div>
    
    )

}

export default Navbar


