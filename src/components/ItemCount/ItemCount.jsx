import React, { useState, useContext } from 'react'
import { Button } from '@mui/material';
import styles from './ItemCount.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CartContext } from '../Context/CartContext'


export default function ItemCount({stock, product}) {
    
    const [count, setCount] = useState(1);
    const {addToCart} = useContext(CartContext);
    const itemAddCount = {...product, count}



    function adding(){
        if(count < stock){
            setCount(count + 1);
        }
    }

    function subtract(){
        if(count > 0){
            setCount(count - 1);
        }
    }

/*     function onAdd(){
        return alert(`Agregaste ${count} articulos al carrito`)
    } */

  return (
    <>
    <div className={styles.container}>
        <div className={styles.contenedorItemCount} >

            <Button id={styles.botones} onClick ={subtract}> <ArrowBackIosIcon sx={{ fontSize: 15 }}/> </Button>

            <p className={styles.contador}>{count}</p>

            <Button id={styles.botones} onClick ={adding} > <ArrowForwardIosIcon sx={{ fontSize: 15 }}/> </Button>

        </div>
            {/* <div id={styles.addToCartDiv}> */}
            <Button variant="outlined" id={styles.addToCart} 
            onClick={() =>{
                addToCart(itemAddCount);
                setCount(1)
                ;
                }}> ADD TO CART</Button>
            {/* </div> */}
    </div>
    </>
  )
}

