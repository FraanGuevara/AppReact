import React from 'react'
import styles from './GridCartDetail.module.css';
import paypal from '../../img/PayPal_logo.png'
import Form from '../Form.jsx/Form';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Summary({ cantidadDeProductos, precioTotal, buy, setIdCompra, }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
                <Button onClick={handleOpen} id={styles.botonCheckOut}>CHECKOUT </Button>
                <div className={styles.divPaypal} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '50px' }}>
                    <p id={styles.proximamente}>coming soon</p>
                    <Button disabled id={styles.botonPaypal}>
                        <img className={styles.imgPaypal} src={paypal} alt="paypal" />
                    </Button>
                </div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box >
                        <Form
                            handleClose={handleClose}
                            buy={buy}
                            setIdCompra={setIdCompra}
                        />
                    </Box>
                </Modal>
            </div>
        </>
    )
}
