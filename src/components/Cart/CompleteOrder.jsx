import React, { useState, useEffect } from 'react';
import { doc, getFirestore, getDoc } from 'firebase/firestore';
import styles from './CompleteOrder.module.css'
import { Button } from '@mui/material';
export default function CompleteOrder({ idCompra }) {

  const [compra, setCompra] = useState({});
  const [comprador, setComprador] = useState({});
  const [items, setItems] = useState([]);


  /*   useEffect(() => {
  
      const db = getFirestore();
      const prodRef = doc(db, "ventas", idCompra);
      getDoc(prodRef).then((res) => {
        setCompra({ id: res.id, ...res.data() });
        setComprador(res.data().buyer);
        setItems(res.data().items);
      });
  
    }, [idCompra]) */

  /* {items.map(item => }<p> item:{item.nombre}GORRA| cantidad:{item.count} 2| precio por unidad: 30{item.precio}| subtotal: 60{item.precio * item.count}</p>)} */

  return (
    <>
      <div className={styles.CompleteOrder}>

        <div className={styles.containerCompleteOrder}>
          <p className={styles.h1}>Thank you very much for your purchase {comprador.name}!</p>
          <h2>Purchase ID #: {compra.id}</h2>
          <h2>Purchase detail:</h2>
          <p>item:GORRA| cantidad: 2| precio por unidad: 30| subtotal: 60</p>
          <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', marginTop:'auto', marginBottom:'25px'}}>
          <Button id={styles.botonVolver}>Volver a la tienda</Button>
            Total:
          </div>
        </div>
      </div>
    </>
  )
}
