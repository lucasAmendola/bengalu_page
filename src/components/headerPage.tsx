import React from 'react'
import productos from './productSection'
import logo from '../assets/bengalu_logo.png'

export default function headerPage() {
  
  return (
        <header  className='bannerHeader'> 
            <div className='pageLogotype'>
              <img className='headerLogo' src={logo} alt="" />
              <h1 className='headerTitle'>BenGaLu</h1>
            </div>
            <div className='optionsHeader'>
                <a href="#contactSect" className='navLinks'><h4>Contacto</h4></a>
                <a href="#productSect" className='navLinks'><h4>Productos</h4></a>
            </div>
        </header>
  )
}
