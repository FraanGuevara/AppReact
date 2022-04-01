import React from 'react';
import ItemList from './ItemList';



export default function ItemListContainer() {

    const arrProductos = ["remera", "buzo", "campera", "pantalon"]

    return (
        <>
            <ItemList productos = {arrProductos}/>
        </>
        
    );
}