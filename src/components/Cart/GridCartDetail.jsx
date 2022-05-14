import React, { useContext, useState, useEffect } from 'react';
import { Button, Card } from '@mui/material';
import { CardMedia } from '@mui/material'
import styles from './GridCartDetail.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import Summary from './Summary';



export default function GridCartDetail() {

    const { cart, removeCart, removeCartAll, sacarProducto } = useContext(CartContext);

    const [cantidadDeProductos, setCantidadDeProductos] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

    const productosXCantidad = (item) => {
        return (parseInt((item.count) * (item.precio)));
    }

        useEffect(() => {
            setCantidadDeProductos(
                cart.reduce((previous,current) => previous + current.count, 0))

            setPrecioTotal(cart.reduce(
                (previous,current) => previous + current.precio * current.count, 0))
            }, [cart])


    return (
        <>
        
            <div style={{ display: 'flex', justifyContent:'center', alignItems:'flex-start' }}>
                <div style={{ marginTop: '5%', width:'55%' }}>
                    <h2 id={styles.h2Cart}>CART</h2>
                    {cart.map(item => (
                        <>
                            <div className={styles.sectionItemCart}>
                                <div>
                                    <Card sx={{ maxWidth: 200 }}>
                                        <CardMedia
                                            className={styles.imagenCard}
                                            component="img"
                                            minheight="150"
                                            image={item.imagen[0]}
                                            alt={item.nombre} />
                                    </Card>
                                </div>
                                <div style={{width:'50%'}}>
                                    <div>
                                        <h3>{item.nombre}</h3>
                                    </div>
                                    <div>
                                        <p>Category : {item.category}</p>
                                    </div>
                                    <div>
                                        <h4> Quantity : {item.count}ㅤㅤ|ㅤㅤ
                                        <Link style={{color:'#0077ff'}} to={'/category/'+ item.category +'/item/'+item.id}>add more units</Link></h4>
                                    </div>
                                    <div>
                                        <p style={{color:'#8d99ae', fontFamily:'monospace'}}>
                                            you are purchasing a legitimate AuraFlow product. It has a 30-day guarantee from the date the purchase arrives for a return or exchange.</p>
                                    </div>
                                    <div>
                                        <h3>${productosXCantidad(item)}</h3>
                                    </div>
                                </div>

                                <div>
                                    <Button className={styles.botonRemoveCarrito} onClick={() =>{
                                        sacarProducto(item.id, item.count);
                                    } }><DeleteIcon /></Button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <Summary 
                cantidadDeProductos = {cantidadDeProductos}
                precioTotal = {precioTotal}
                />
            </div>
        </>

    );
}
