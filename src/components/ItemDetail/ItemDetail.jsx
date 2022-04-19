import React, { useState } from 'react'
import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail(product) {

    /* Destructuring del producto*/
    const {imagen, nombre, descripcion, cantidad} = product


    
    return (
    <>
        <div className={styles.contenedor}>
            <img src= {imagen} alt={nombre}/>
            <h2>{nombre}</h2>
            <h5>{descripcion}</h5>

            <ItemCount stock = {cantidad} />
        </div>
        

    </>
    )
}
