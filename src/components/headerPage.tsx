import React from 'react'
import logo from '../assets/bengalu_logo.png'

export default function headerPage() {
  
  return (
        <header  className='headerContainer'> 
            <div className='pageLogotype'>
              <img className='headerLogo' src={logo} alt="" />
              <a className='link' href="#inicio"><h1 className='headerTitle'>BenGaLu</h1></a>
            </div>
            <div className='optionsHeader'>
                <a href="#contactSect" className='navLinks'><h4>Contacto</h4></a>
                <a href="#productSect" className='navLinks'><h4>Productos</h4></a>
            </div>
        </header>
  )
}
