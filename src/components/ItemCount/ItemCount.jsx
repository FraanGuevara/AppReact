import React, { useState, useContext } from 'react'
import { Button } from '@mui/material';
import { CartContext } from '../Context/CartContext'
import styles from './ItemCount.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ItemCount({ stock, product }) {

    const [count, setCount] = useState(1);
    const [open, setOpen] = React.useState(false);
    const { addToCart } = useContext(CartContext);
    const itemAddCount = { ...product, count }

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    function adding() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function subtract() {
        if (count > 1) {
            setCount(count - 1);
        }
    }


    return (
        <>
            <div className={styles.container}>
                {stock > 0 ?
                    <>
                        <div className={styles.contenedorItemCount} >
                            <Button id={styles.botones} onClick={subtract}> <ArrowBackIosIcon sx={{ fontSize: 15 }} /> </Button>
                            <p className={styles.contador}>{count}</p>
                            <Button id={styles.botones} onClick={adding} > <ArrowForwardIosIcon sx={{ fontSize: 15 }} /> </Button>
                        </div>
                        <Button variant="outlined" id={styles.addToCart}
                            onClick={() => {
                                addToCart(itemAddCount);
                                setCount(1);
                                handleClick();
                            }}> ADD TO CART</Button>

                        {/* Notificacion cuando se agrega al carrito */}
                        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '200px' }}>
                                Added to cart
                            </Alert>
                        </Snackbar>
                    </>
                    :
                    <h2>OUT OF STOCK</h2>
                }
            </div>
        </>
    )
}

