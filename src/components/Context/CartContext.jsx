import { createContext, useState, useEffect } from "react"
import React from 'react'



export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  /* Estado del ID de la compra realizada */
  const [idCompra, setIdCompra] = useState("");

  const [cart, setCart] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem('cartProductos');
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cartProductos', JSON.stringify(cart));
  }, [cart]);

  
  /* -------------------- */
  /* Funcion para agregar items al carrito */
  const addToCart = (item) => {
    const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (indexItem !== -1) {
      const newCart = [...cart];
      newCart[indexItem].count = newCart[indexItem].count + item.count;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };
  /* -------------------- */
  /* Funcion para remover items del carrito cuando haya mas de 1 */
  const sacarProducto = (id, count) => {
    const removeCart = (id) => {
      setCart(cart.filter(item => item.id !== id));
    };
/* Funcion para retirar unidades del producto en el carrito */
    const eliminarUnidad = (id) => {
      let producto = cart.findIndex(item => item.id === id);
      if (producto !== -1) {
        const newCart = [...cart];
        newCart[producto].count = newCart[producto].count - 1;
        setCart(newCart)
      }
    }

    if (count === 1) {
      removeCart(id)
    } else {
      eliminarUnidad(id)
    }
  }

  /* Funcion para remover todo del carrito */
  const removeCartAll = () => setCart([]);

  /* Funcion para cuando compre remover todo del carrito */
  const buy = () => setCart([]);

  /* Funcion para mostrar la cantidad total del carrito */
  const cantidadTotalProductos = () => {
    return cart.reduce((previous, current) => previous + current.count, 0);
  }

  /* Funcion para mostrar el precio total del carrito */
  const precioTotalProductos = () => {
    return cart.reduce((previous, current) => previous + current.precio * current.count, 0)
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, buy, removeCartAll, sacarProducto, cantidadTotalProductos, precioTotalProductos, idCompra, setIdCompra}}>
        {children}
      </CartContext.Provider>

    </>
  )
}

export default CartContextProvider

