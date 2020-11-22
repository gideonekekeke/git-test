import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className = 'footer_container'>
            <section className = 'footer_subscription'>
            <div className = 'my_logo'><h3>Apkly.</h3></div>
                <p className = 'Footer-subscription-heading'>
                    join the Adventure newsletter to recieve our best vacation deals
                </p>
                  <p className = 'footer-subscription-text'>
                      you can unsubscribe at any time.
                  </p>
                   
                    <div className = 'input areas'>
                      <form>
                          <input type='email' name = 'email' placeholder = 'Subscribe here' className  = 'footer-input' />

                          <button>subscribe</button>
                      </form>

                    </div>
            </section>
            <div className = 'footer-links'>
                <div className = 'footer-link-wrapper'>
                  <div className = 'footer-link-items'>
                       <h2>About us</h2>
                       <Link > how it works</Link>
                       <Link >Testimonials</Link>
                       <Link >Careers</Link>
                       <Link >Investors</Link>
                       <Link >Terms of Service</Link>
                  </div>
                  

                </div>
                <div className = 'footer-link-wrapper'>
                  <div className = 'footer-link-items'>
                       <h2>Our Menu</h2>
                       <Link > how it works</Link>
                       <Link >Testimonials</Link>
                       <Link >Careers</Link>
                       <Link >Investors</Link>
                       <Link >Terms of Service</Link>
                  </div>
                  

                </div>
                <div className = 'footer-link-wrapper'>
                  <div className = 'footer-link-items'>
                       <h2>Follow Us</h2>
                       <Link > Facebook</Link>
                       <Link >Instagram</Link>
                       <Link >Google +</Link>
                       <Link >Youtube</Link>
                       <Link >Twitter</Link>
                  </div>
                  

                </div>
                <div className = 'footer-link-wrapper'>
                  <div className = 'footer-link-items'>
                       <h2>About us</h2>
                       <Link > how it works</Link>
                       <Link >Testimonials</Link>
                       <Link >Careers</Link>
                       <Link >Investors</Link>
                       <Link >Terms of Service</Link>
                  </div>
                  

                </div>

            </div>
            <section className = 'social-media'>
                <div className = 'social-media-wrap'>
                    <div className = 'copy'> Copyright (c) 2020 - Design by Gideon</div>
                    
                </div>



            </section>
        </div>
    )
}

export default Footer
