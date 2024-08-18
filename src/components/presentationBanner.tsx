import React from 'react'
import logo from '../assets/bengalu_logo.png'
import arrow from '../assets/arrow.png'

export default function presentationBanner() {
  return (
    <div id='inicio' className='innitBanner'>
            <div className='bannerContainer'>
              <div className='leftSide'>
                <div className='leftSideContainer'>
                  <h1 className='refran'>Bengalu, Donde tus proyectos digitales se hacen realidad.</h1>
                  <h3 className='parrafoBanner'> Acá, cada idea se convierte en algo tangible, cada paso es un avance 
                    hacia tu visión, y cada herramienta está diseñada para ayudarte a construir sin límites.</h3>
                </div>
              </div>
              <div className='rightSide'>
                <div className='logoContainer'>
                  <img className='bannerLogo' src={logo} alt="" />
                  <h1 className='bannerTitle'>BenGaLu</h1>
                </div>
                
                  <div className='circle'>
                    <h1>¿Quienes somos?</h1>
                    <a href="#aboutUs"><img src={arrow} alt="arrow"/> </a>
                  </div>
              </div>
            </div>
    </div>
  )
}
