import { Button } from '@mui/material';
import React from 'react'
import styles from './GridCartDetail.module.css';
import paypal from '../../img/PayPal_logo.png'


export default function Summary({ cantidadDeProductos, precioTotal }) {
    return (
        <>
            <div className={styles.cardComprar}>
                <h2 className={styles.summary}>Summary</h2>
                <div>
                    <h4 className={styles.cantidadProductos}> CANTIDAD de productos:
                        <p>{cantidadDeProductos}</p> </h4>
                    <h4 className={styles.subtotal}>Subtotal : <p>$ {precioTotal}</p></h4>
                    <h4 className={styles.envios}>Estimate Shipping:
                        <p className={styles.envioFree}> $0.00 </p>
                    </h4>
                    <h4 className={styles.tax}>Estimate Tax <p> -- </p></h4>
                </div>
                <h3 className={styles.total}> <p className={styles.totalParrafo}> TOTAL:</p> 
                ${precioTotal} </h3>

                <Button id={styles.botonCheckOut}>CHECKOUT</Button>
                <Button id={styles.botonPaypal}>
                    <img className={styles.imgPaypal} src={paypal} alt="paypal" />
                </Button>
            </div>
        </>
    )
}
