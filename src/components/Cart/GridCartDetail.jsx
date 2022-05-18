import React, { useState, useEffect } from 'react';
import { Button, Card } from '@mui/material';
import { CardMedia } from '@mui/material'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './GridCartDetail.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Summary from './Summary';



export default function GridCartDetail({ cart, removeCartAll, sacarProducto, cantidadTotalProductos, precioTotalProductos, buy, setIdCompra }) {


    const [cantidadDeProductos, setCantidadDeProductos] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

    const productosXCantidad = (item) => {
        return (parseInt((item.count) * (item.precio)));
    }

    useEffect(() => {
        setCantidadDeProductos(cantidadTotalProductos);
        setPrecioTotal(precioTotalProductos);
        setIdCompra('')
    }, [cart])


    return (
        <>
            <motion.div
                initial={{ scale: 0 }}
                transition={{ duration: 0.5 }}
                animate={{ scale: 1 }}
                className={styles.containerCart}>
                <div className={styles.sectionItemCartContainer}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 id={styles.h2Cart}>CART</h2>
                        <Button id={styles.botonRemoverCart} onClick={() => removeCartAll()}>Remove all cart</Button>
                    </div>
                    {cart.map(item => (
                        <>
                            <div className={styles.sectionItemCart}>
                                <div className={styles.sectionimagenCard}>
                                    <Card sx={{ maxWidth: 200 }}>
                                        <CardMedia
                                            className={styles.imagenCard}
                                            component="img"
                                            minheight="150"
                                            image={item.imagen[0]}
                                            alt={item.nombre} />
                                    </Card>
                                </div>
                                <div className={styles.sectionDescripcionCard}>
                                    <div>
                                        <h3>{item.nombre}</h3>
                                    </div>
                                    <div>
                                        <p>Category : {item.category}</p>
                                    </div>
                                    <div>
                                        <h4> Quantity : {item.count}ㅤㅤ|ㅤㅤ
                                            <Link style={{ color: '#0077ff' }} to={'/category/' + item.category + '/item/' + item.id}>add more units</Link></h4>
                                    </div>
                                    <div>
                                        <p style={{ color: '#8d99ae', fontFamily: 'monospace' }}>
                                            you are purchasing a legitimate AuraFlow product. It has a 30-day guarantee from the date the purchase arrives for a return or exchange.</p>
                                    </div>
                                    <div>
                                        <h3>${productosXCantidad(item)}</h3>
                                    </div>
                                </div>
                                <div>
                                    <Button className={styles.botonRemoveCarrito} onClick={() => {
                                        sacarProducto(item.id, item.count);
                                    }}><DeleteIcon /></Button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <Summary
                    cantidadDeProductos={cantidadDeProductos}
                    precioTotal={precioTotal}
                    buy={buy}
                    setIdCompra={setIdCompra}
                />
            </motion.div>
        </>

    );
}
