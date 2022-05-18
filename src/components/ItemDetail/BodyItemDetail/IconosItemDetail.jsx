import React from 'react'
import devolucion from './img/devolucion-de-producto.png'
import tienda from './img/tienda.png'
import tarjetas from './img/pago-con-tarjetas-de-credito.png'
import entrega from './img/entrega.png'
import styles from '../ItemDetail.module.css'


export default function IconosItemDetail() {

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '11px', textAlign: 'center' }}>
                <div className={styles.divIconos}>
                    <img src={devolucion} alt="Icono de devolucion" style={{ width: '45px', margin: '0 auto' }} />
                    <p className={styles.parrafoIconos}>30 day return</p>
                </div>
                <div className={styles.divIconos}>
                    <img src={tarjetas} alt="Icono de tarjetas" style={{ width: '45px', margin: '0 auto' }} />
                    <p className={styles.parrafoIconos}>3/6 Interest 0%</p>
                </div>
                <div className={styles.divIconos}>
                    <img src={tienda} alt="Icono de devolucion" style={{ width: '45px', margin: '0 auto' }} />
                    <p className={styles.parrafoIconos}>Pick up in store</p>
                </div>
                <div className={styles.divIconos}>
                    <img src={entrega} alt="Icono de devolucion" style={{ width: '45px', margin: '0 auto' }} />
                    <p className={styles.parrafoIconos}>Shipping all over the country</p>
                </div>
            </div>
        </>
    )
}
