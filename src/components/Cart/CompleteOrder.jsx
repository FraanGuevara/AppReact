import React, { useState, useEffect } from 'react';
import { doc, getFirestore, getDoc } from 'firebase/firestore';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './CompleteOrder.module.css'


export default function CompleteOrder({ idCompra }) {
  const [compra, setCompra] = useState({});
  const [comprador, setComprador] = useState({});
  const [items, setItems] = useState([]);


  useEffect(() => {
    const db = getFirestore();
    const prodRef = doc(db, "ventas", idCompra);
    getDoc(prodRef).then((res) => {
      setCompra({ id: res.id, ...res.data() });
      setComprador(res.data().buyer);
      setItems(res.data().items);
    });
  }, [idCompra])


  /* {items.map(item => }<p> item:{item.nombre}GORRA| cantidad:{item.count} 2| precio por unidad: 30{item.precio}| subtotal: 60{item.precio * item.count}</p>)} */
  return (
    <>
      <div className={styles.CompleteOrder}>
        <div className={styles.containerCompleteOrder}>
          <p className={styles.h1}>Thank you very much for your purchase {comprador.name}!</p>
          <p>we will verify your order you will receive a payment order</p>
          <h2>Purchase ID #: {compra.id}</h2>
          <h2>Purchase detail: </h2>
          <div className={styles.items}>
            <table>
              <tr>
                <th>Item</th>
                <th>Count</th>
                <th>Price by unit</th>
                <th>Subtotal</th>
              </tr>
              {items.map(item => {
                return (<tr>
                  <td><Link style={{ color: '#0077ff', textDecoration: 'none', fontWeight: 'bold' }} to={'/category/' + item.category + '/item/' + item.id}>{item.nombre}</Link></td>
                  <td>{item.count}</td>
                  <td>{item.precio}</td>
                  <td>{item.count * item.precio}</td>
                </tr>)
              }
              )}
            </table>
            {/* {items.map(item => <p>Item: {item.nombre} | Count: {item.count}| Price by unit: {item.precio}| Subtotal: {item.count * item.precio}</p>)} */}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 'auto', marginBottom: '25px' }}>
            <Link style={{ textDecoration: 'none' }} to='/'>
              <Button id={styles.botonVolver}>Return to the store</Button>
            </Link>
            <h2>Total: ${compra.total} </h2>
          </div>
        </div>
      </div>
    </>
  )
}
