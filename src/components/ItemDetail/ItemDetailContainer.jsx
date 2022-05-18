import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail'
import Loading from '../Loading/Loading';

export default function ItemDetailContainer({ }) {

    const [producto, setProducto] = useState({});
    const { id } = useParams();

    /* loading */
    const [loading, setLoading] = useState(true)

    /* Firebase */

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, 'products', id);
        setLoading(true);
        getDoc(item)
            .then((res) => {
                try {
                    setProducto({ id: res.id, ...res.data() })
                } catch (error) {
                    console.log(error)
                } finally {
                    setLoading(false)
                }
            })
    }, [])



    return (
        <>
            {/* Operador ternario para que muestre el Loading hasta que termine en este caso el setTimeOut*/}
            {loading ? <Loading /> : (<ItemDetail {...producto} />)}
        </>
    )
}
