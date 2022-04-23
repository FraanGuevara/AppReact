import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import {productos} from '../../utils/productos'
import {customFetch} from '../../utils/customFetch'
import styles from './ItemListContainer.module.css'
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { CircularProgress } from '@mui/material';
import Loading from '../Loading/Loading';

export default function ItemListContainer() {

    const [items, setItems] = useState([]);

    const { categoryId } = useParams();

    console.log(categoryId)

    /* loading */
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(1000, productos, categoryId)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error))
            /* Setear a false el setLoading para que desaparezca el ternario y muestre el item */
            .finally(()=> setLoading(false))
    }, [categoryId])


    return (
        <>
        {/* Operador ternario para que muestre el Loading hasta que termine en este caso el setTimeOut*/}
        {loading ? 
        (   <>
            <Loading/>
            </>) :
        (
            <div id={styles.itemListContainer}>
                < ItemList productos={items} />
            </div>
        )}
        </>
        

    );
}