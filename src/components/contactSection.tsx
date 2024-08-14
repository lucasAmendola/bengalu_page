import React from 'react'
import logoMail from '../assets/icons8-mensaje-64 1.png'
import logoIg from '../assets/instagram-white-icon 1.png'
import logoWsp from '../assets/images 1.png'

export default function contactSection() {
  return (
    <div id='contactSect' className='contactSection'>
        <div className='contactContainer'>
          <h1>Contactate directo con nosotros</h1>
          <p className='contactDescription'>Nos apasiona ayudar a transformar tus ideas en soluciones tecnológicas de éxito. 
            Si tenés alguna pregunta, necesitas más información sobre nuestros servicios, o querés discutir cómo podemos 
            colaborar, no dudes en ponerte en contacto con nosotros. Estamos para ayudarte.
          </p>
            <div  className='socialMediasContainer'>
                <div className='socialMedias'>
                    <img src={logoWsp} alt="" />
                    <h4>+ 54 9 249 4245153</h4>
                  </div>
                  <div className='socialMedias'>
                    <img src={logoMail} alt="" />
                    <a className='link' href="mailto:bengaluSoftware@gmail.com"><h4>BengaluSoftware@gmail.com</h4></a>
                  </div>
                  <div className='socialMedias'>
                    <img src={logoIg} alt="" />
                    <a href="https://www.instagram.com/bengalusoftware/" className='link'><h4>@bengalu_dev</h4> </a>
                  </div>
                </div>
            </div>
    </div>
  )
}
