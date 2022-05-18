import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext'
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import FormDetail from './FormDetail';

export default function Form({ handleClose, buy, setIdCompra }) {

    const { cart, precioTotalProductos } = useContext(CartContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const totalOrder = precioTotalProductos();

    /* Orden del carrito */
    let order = {
        buyer: { name, email, phone, address },
        items: cart,
        total: totalOrder
    };


    const enviarOrder = () => {
        /* Llamada a la base de datos */
        const db = getFirestore();
        // Carga la venta y vacía el carrito
        const ventas = collection(db, 'ventas');
        addDoc(ventas, order).then(({ id }) => {
            setIdCompra(id)
            buy();
        });
    }



    return (
        <>
            <FormDetail
                name={name}
                email={email}
                phone={phone}
                adress={address}
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
                setAddress={setAddress}
                enviarOrder={enviarOrder}
                handleClose={handleClose}
                buy={buy}
            />

        </>
    )
}
