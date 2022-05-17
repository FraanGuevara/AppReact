import React, { useState } from 'react'
import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import IconosItemDetail from './BodyItemDetail/IconosItemDetail'
import { Link, useParams } from 'react-router-dom';
import Carrousel from './BodyItemDetail/Carrousel'

export default function ItemDetail(product) {
    /* Destructuring del producto*/
    const { imagen, nombre, descripcion, cantidad, precio } = product

    const { categoryId } = useParams();

    return (
        <>
            <div id={styles.barraNavegacion}>
                <Link id={styles.textCategory} to={'/'}>All products </Link>
                {'>'} Category {'>'}
                <Link id={styles.textCategory} to={'/category/' + categoryId}>{categoryId}</Link> {'>'} {nombre}
            </div>


            <div className={styles.contenedor}>

                {/* Imagen */}
                <div id={styles.divImg}>
                    <Carrousel imagen={imagen} />
                </div>

                {/* Nombre y descripcion */}
                <div id={styles.DivNameDesc}>
                    <div id={styles.nombrePrecio}>
                        <h1 style={{ color: '#0077ff' }}>{nombre}</h1>
                        <hr />
                        <p> </p>
                        <h2> US${precio}</h2>
                        <h5 style={{ color: '#00a650', fontFamily: 'barlow semi condensed,sans-serif', fontWeight: '900' }}>3 AND 6 FREE INTEREST QUOTES</h5>
                    </div>
                    <div id={styles.descripcion}>
                        <h3 style={{ textDecoration: 'underline', marginBottom: '0' }}>DESCRIPTION</h3>
                        <p style={{ margin: 0, marginBottom: '20%' }}>{descripcion}</p>
                        {<hr />}
                    </div>

                </div>

                {/* Div item count */}
                <div id={styles.divItemCount}>
                    <ItemCount
                        stock={cantidad}
                        product={product} />
                </div>

                {/* Div Iconos */}
                <div id={styles.iconosDetail}>
                    <IconosItemDetail />
                </div>
            </div>


        </>
    )
}
