import React, { useState } from 'react'
import { Button } from '@mui/material';
import styles from './itemCount.modules.css'

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
        return `Agregaste ${count} articulos al carrito`
    }

  return (
    <>
    <div className='container'>
        <div className='contenedorItemCount' >
            <Button onClick ={subtract} variant="outlined">Sacar</Button>
            <p className='contador'>{count}</p>
            <Button onClick ={adding} variant="outlined">Agregar</Button>
        </div>
        <p className='leyendaItemList'>{onAdd()}</p>
    </div>
    </>
  )
}

