import React from 'react'
import devolucion from './img/devolucion-de-producto.png'
import tienda from './img/tienda.png'
import tarjetas from './img/pago-con-tarjetas-de-credito.png'
import entrega from './img/entrega.png'


export default function IconosItemDetail() {

  return (
    <>
    <div style={{display:'flex', justifyContent:'space-around', fontSize:'11px', textAlign:'center'}}>
        <div style={{display:'grid', width:'45px'}}>
            <img src={devolucion} alt="Icono de devolucion" style={{width:'45px', margin:'0 auto'}} />
            <p style={{textAlign:'center'}}>30 day return</p>
        </div>
        <div style={{display:'grid', width:'45px'}}>
            <img src={tarjetas} alt="Icono de tarjetas" style={{width:'45px', margin:'0 auto'}} />
            <p>3/6 Interest 0%</p>
        </div>
        <div style={{display:'grid', width:'45px'}}>
            <img src={tienda} alt="Icono de devolucion" style={{width:'45px', margin:'0 auto'}} />
            <p>Pick up in store</p>
        </div>
        <div style={{display:'grid', width:'45px'}}>
            <img src={entrega} alt="Icono de devolucion" style={{width:'45px', margin:'0 auto'}} />
            <p>Shipping all over the country</p>
        </div>
    </div>
    </>
  )
}
