import React from 'react'
import Item from './Item'


export default function ItemList({productos}) {
  return (
        productos.map(item => (
            <Item
            key = {item.id}
            id = {item.id}
            nombre = {item.nombre}
            precio = {item.precio}
            imagen= {item.imagen}
            category = {item.category}
            descripcion = {item.descripcion}
            cantidad = {item.cantidad} />
            ))
  )
}
