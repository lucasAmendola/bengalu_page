import React from 'react'

export default function productSection() {
  return (
    <div id='productSect' className='productSection'>
        <div className='productInfo'>
            <h1>Nuestros productos</h1>
            <p className='descripcion'>POS (Point of sale) o Punto de venta permite a los comercios administrar eficientemente su inventario, 
                ventas y control general de artículos. Ofrece seguimiento en tiempo real del stock, historial de ventas, y herramientas 
                de análisis para optimizar la operación diaria. Con una interfaz intuitiva, facilita la toma de decisiones y asegura un manejo 
                ágil y preciso de todos los productos del negocio.</p>
          
        </div>
        <div className='wrapper'>
            <div className='productContainer'>
                <div id='crd1' className='cntnt'>
                    <input type="radio" name='slide' id='cc1' checked/>
                    <label htmlFor="cc1" className='card'>
                        <div className='row'>
                            <div className='description'>
                                
                            </div>
                        </div>
                    </label>
                    <h5 className='miniDescription'>Menu intuitivo</h5>
                </div>
                <div id='crd2' className='cntnt'>
                    <input type="radio" name='slide' id='cc2' checked/>
                    <label htmlFor="cc2" className='card'>
                        <div className='row'>
                            <div className='description'></div>
                        </div>
                    </label>
                    <h5 className='miniDescription'>Aspecto moderno</h5>
                </div>
                <div id='crd3' className='cntnt'>
                    <input type="radio" name='slide' id='cc3' checked/>
                    <label htmlFor="cc3" className='card'>
                        <div className='row'>
                            <div className='description'>
                            </div>
                        </div>
                    </label>
                    <h5 className='miniDescription'>Interfaz detallada</h5>
                </div>
                <div  id='crd4' className='cntnt'>
                    <input type="radio" name='slide' id='cc4' checked/>
                    <label htmlFor="cc4" className='card'>
                        <div className='row'>
                            <div className='description'>
                            </div>
                        </div>
                    </label>
                    <h5 className='miniDescription'>Personalizacion</h5>
                </div>
                <div id='crd5' className='cntnt'>
                    <input type="radio" name='slide' id='cc5' checked/>
                    <label htmlFor="cc5" className='card'>
                        <div className='row'>
                            <div className='description'>
                            </div>
                        </div>
                    </label>
                    <h5 className='miniDescription'>Busqueda avanzada</h5>
                </div>
                <div id='crd6' className='cntnt'>
                    <input type="radio" name='slide' id='cc6' checked/>
                    <label htmlFor="cc6" className='card'>
                        <div className='row'>
                            <div className='description'>
                            </div>
                        </div>
                    </label>
                    <h5 className='miniDescription'>Control total</h5>
                </div>
                <div id='crd7' className='cntnt'>
                    <input type="radio" name='slide' id='cc7' checked/>
                    <label htmlFor="cc7" className='card'>
                        <div className='row'>
                            <div className='description'>
                            </div>
                        </div>
                    </label>
                    <h5 className='miniDescription'>Ventas detalladas</h5>
                </div>
            </div>
        </div>
    </div>
  )
}
