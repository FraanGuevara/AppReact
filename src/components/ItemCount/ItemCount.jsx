import React, { useState } from 'react'
import { Button } from '@mui/material';
import styles from './ItemCount.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ItemCount({stock}) {

    const [count, setCount] = useState(0);

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

    function onAdd(){
        return alert(`Agregaste ${count} articulos al carrito`)
    }

  return (
    <>
    <div className={styles.container}>
        <div className={styles.contenedorItemCount} >

            <Button id={styles.botones} onClick ={subtract}> <ArrowBackIosIcon sx={{ fontSize: 15 }}/> </Button>

            <p className={styles.contador}>{count}</p>

            <Button id={styles.botones} onClick ={adding} > <ArrowForwardIosIcon sx={{ fontSize: 15 }}/> </Button>

        </div>
            <div id={styles.addToCartDiv}>

            <Button variant="outlined" id={styles.addToCart} > ADD TO CART</Button>
            </div>
    </div>
    </>
  )
}

