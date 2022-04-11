import React, { useState } from 'react'
import { Button } from '@mui/material';
import styles from './ItemCount.module.css'

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
            <Button onClick ={subtract} variant="outlined">Sacar</Button>
            <p className={styles.contador}>{count}</p>
            <Button onClick ={adding} variant="outlined">Agregar</Button>
        </div>
        {/* <p className='leyendaItemList'>{onAdd}</p> */}
    </div>
    </>
  )
}

