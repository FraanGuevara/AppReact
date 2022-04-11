import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import productos from '../utils/productos'
import customFetch from '../utils/customFetch'
import styles from './ItemListContainer.module.css'



export default function ItemListContainer() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(3000, productos)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error));
    }, [items])


    return (
        <div className={styles.itemListContainer}>
            <ItemList productos={productos} />
        </div>

    );
}