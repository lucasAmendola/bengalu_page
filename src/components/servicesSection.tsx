import React from 'react'
import ServiceCard from './serviceCard'

export default function servicesSection() {
  return (
    <div className='servicesSectionContainer'>
        <div className='servicesContent'>
            <h1>¿Cómo podemos ayudarte?</h1>
            <div className='gridSection'>
                <div id='c1'>                
                    <ServiceCard
                    title='AGILIDAD'
                    desc='Trabajamos con los mejores recursos y herramientas para encontrar soluciones rápidamente.'/></div>
                <div id='c2'>                
                    <ServiceCard
                    title='COSTOS'
                    desc='Te ayudamos a definir el presupuesto de acuerdo a tus necesidades.'/></div>
                <div id='c3'>                
                    <ServiceCard
                    title='CONFIABILIDAD'
                    desc='Estamos dispuestos a brindar servicios de alta calidad que aseguran el éxito de su proyecto.'/></div>
                <div id='c4'>                
                    <ServiceCard
                    title='AGILIDAD'
                    desc='Trabajamos con los mejores recursos y herramientas para encontrar soluciones rápidamente.'/></div>
                <div id='c5'>                
                    <ServiceCard
                    title='AGILIDAD'
                    desc='Trabajamos con los mejores recursos y herramientas para encontrar soluciones rápidamente.'/></div>
                <div id='c6'>                
                    <ServiceCard
                    title='AGILIDAD'
                    desc='Trabajamos con los mejores recursos y herramientas para encontrar soluciones rápidamente.'/></div>
            </div>
        </div>
    </div>
  )
}
