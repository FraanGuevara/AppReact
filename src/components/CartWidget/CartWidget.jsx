import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './CartWidget.module.css'


export default function CartWidget() {

    const { cart, cantidadTotalProductos, IdCompra } = useContext(CartContext);
    const [cantidadDeProductos, setCantidadDeProductos] = useState(0);

    useEffect(() => {
        setCantidadDeProductos(cantidadTotalProductos)
    }, [cart])

    return (
        <>
            <Link id={styles.linkWidgetCart} to='/cart'>
                {cantidadDeProductos === 0 ? <IconButton >
                    <ShoppingCartIcon style={{ width: 35, height: 'auto', color: '#f77f00' }} alt="carrito" />
                </IconButton>
                    :
                    <IconButton >
                        <ShoppingCartIcon style={{ width: 35, height: 'auto', color: '#f77f00' }} alt="carrito" />
                        <span id={styles.spanWidgetCart}>{cantidadDeProductos}</span>
                    </IconButton>}
            </Link>
        </>
    );
}