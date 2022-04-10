import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList';



export default function ItemListContainer() {

    const arrProductos = ["remera", "buzo", "campera", "pantalon"]
    const stock = 5;
    return (
        <>
            <ItemList productos = {arrProductos}/>
            <ItemCount stock = {stock} />
        </>
        
    );
}