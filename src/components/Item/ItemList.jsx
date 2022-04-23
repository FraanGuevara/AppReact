import React from 'react'
import Item from './Item'
import styles from './ItemListContainer.module.css'


export default function ItemList({productos}) {
  return (
        productos.map(item => (
          <div id={styles.items}>
            <Item
            key = {item.id}
            id = {item.id}
            nombre = {item.nombre}
            precio = {item.precio}
            imagen= {item.imagen}
            category = {item.category}
            descripcion = {item.descripcion}
            cantidad = {item.cantidad} />
          </div>
            ))
  )
}
