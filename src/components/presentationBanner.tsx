import React from 'react'
import logo from '../assets/bengalu_logo.png'

export default function presentationBanner() {
  return (
    <div className='innitBanner'>
            <div className='triangle'></div>
        <div className='bannerContainer'>
            <img className='bannerLogo' src={logo} alt="" />
            <h1 className='bannerTitle'>BenGaLu</h1>
        </div>
        <h3 className='refran'>Tu socio confiable para llevar tus ideas al siguiente nivel</h3>
    </div>
  )
}
