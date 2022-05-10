import React, { useContext, useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Card } from '@mui/material';
import { CardMedia } from '@mui/material'
import styles from './GridCartDetail.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../Context/CartContext'



export default function GridCartDetail() {

    const { cart, removeCart, removeCartAll } = useContext(CartContext);

    const [cantidadDeProductos, setCantidadDeProductos] = useState(0);

    const productosXCantidad = (item)=>{
        return(parseInt((item.count) * (item.precio)));
    }

    useEffect(() => {
        cart.map(item => console.log(parseInt(item.count)) + cantidadDeProductos);
        setCantidadDeProductos(cantidadDeProductos)
    }, [cart])
    

    return (
        <>
        <div style={{display:'flex'}}>
            <div style={{marginTop:'5%'}}>
                {cart.map(item => (
                    <>
                        <div className={styles.sectionItemCart}>
                            <div>
                                item
                            </div>
                            <div>
                                <h3>{item.id}</h3>
                            </div>
                            <div>
                                <Card className={styles.imagenCard} sx={{ maxWidth: 120 }}>
                                    <CardMedia
                                        component="img"
                                        height="120"
                                        image={item.imagen}
                                        alt={item.nombre} />
                                </Card>
                            </div>
                            <div>
                                <h4>{item.nombre}</h4>
                            </div>
                            <div>
                                <h4>{item.count}</h4>
                            </div>
                            <div>
                                <h4>${productosXCantidad(item)}</h4>
                            </div>
                            <div>
                                <Button className={styles.botonRemoveCarrito} onClick={() => removeCart(item.id)}><DeleteIcon /></Button>
                            </div>
                        </div>
                    </>
                ))}
            </div>


            <div className={styles.cardComprar}>
                <h2>COMPLETE SU COMPRA</h2>
                <h4>CANTIDAD de productos: {cantidadDeProductos}</h4>
                <h4>envio :</h4>
                <h4>TOTAL:</h4>
            </div>
        </div>
        {console.log(cantidadDeProductos)}
        </>

    );
}
