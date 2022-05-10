import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { productos } from '../../utils/productos'
import { customFetch } from '../../utils/customFetch'
import styles from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { CircularProgress } from '@mui/material';
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
        .then((res)=>{
            try {
                setItems(res.docs.map((item) => ({ id: item.id, ...item.data() })))
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        })
    },[categoryId])

            /* .then((res) => {
                setItems(res.docs.map((item) => ({ id: item.id, ...item.data() })))
            });
            console.log(items);
            .catch (error => console.log(error));
            .finally(() => setLoading(false));
}, []) */





/* USEEFFECT PARA TRAER LOS PRODUCTOS HARDCODEADOS */
/* useEffect(() => {
    setLoading(true)
    customFetch(1000, productos, categoryId)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error))
        Setear a false el setLoading para que desaparezca el ternario y muestre el item
        .finally(() => setLoading(false))
}, [categoryId])
 */

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


)}
