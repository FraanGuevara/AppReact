import React, { useState } from 'react'
import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import TallesItemDetail from './BodyItemDetail/TallesItemDetail'
import IconosItemDetail from './BodyItemDetail/IconosItemDetail'
import { Link, useParams } from 'react-router-dom';
import { style } from '@mui/system'

export default function ItemDetail(product) {

    /* Destructuring del producto*/
    const {imagen, nombre, descripcion, cantidad, precio} = product

    const {id} = useParams();
    const {categoryId} = useParams();
    console.log({categoryId})
    return (
    <>
        <div style={{fontWeight:'500', width:'30%', backgroundColor:'#ffd7ba', borderRadius:'0px 5px 5px 0'}}>
        <Link id={styles.textCategory} to={'/'}>All products </Link>
        {'>'} Category {'>'}
        <Link id={styles.textCategory} to={'/category/'+categoryId}>{categoryId}</Link> {'>'} {nombre}
        </div>
        

        <div className={styles.contenedor}>

            {/* Imagen */}
            <div id={styles.divImg}>
                <img id={styles.img} src= {imagen} alt={nombre}/>
            </div>
            
            {/* Nombre y descripcion */}
            <div id={styles.DivNameDesc}>
                <h1>{nombre}</h1>
                <hr/>
                <p> </p>
                <h2> ${precio}</h2>
                <h5 style={{color:'#00a650', fontFamily:'barlow semi condensed,sans-serif', fontWeight:'900'}}>3 AND 6 FREE INTEREST QUOTES</h5>
                <h4 style={{textDecoration:'underline'}}>DESCRIPTION</h4>
                <h5>{descripcion}</h5>
                <br />
                <p>Sizes</p>
                <TallesItemDetail/>
                <br/>
                <br/>
                <br/>
                <hr/>
                
            </div>

            {/* Div item count */}
            <div id={styles.divItemCount}>
                <ItemCount stock = {cantidad} />
            </div>

            {/* Div Iconos */}
            <div>
            <IconosItemDetail/>
            </div>
        </div>
        

    </>
    )
}
