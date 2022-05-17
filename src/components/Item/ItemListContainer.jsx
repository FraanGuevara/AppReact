import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import styles from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export default function ItemListContainer() {

    const [items, setItems] = useState([]);

    const { categoryId } = useParams();

    /* loading */
    const [loading, setLoading] = useState(true)

    /* FIREBASE */
    useEffect(() => {
        const db = getFirestore();
        const products = collection(db, 'products');
        setLoading(true);

        getDocs(products)
            .then((res) => {
                try {
                    const data = res.docs.map((item) => ({ id: item.id, ...item.data() }))

                    const productosFiltrados = data.filter((data) => data.category === categoryId);

                    if (categoryId) {
                        setItems(productosFiltrados);
                    } else {
                        setItems(data);
                    }

                } catch (error) {
                    console.log(error)
                } finally {
                    setLoading(false)
                }
            })
    }, [categoryId])


    return (
        <>
            {/* Operador ternario para que muestre el Loading hasta que termine en este caso el setTimeOut*/}
            {loading ?
                (<>
                    <Loading />
                </>) :
                (
                    <div id={styles.itemListContainer}>
                        < ItemList productos={items} />
                    </div>
                )}
        </>


    )
}
