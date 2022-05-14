import { createContext, useState, useEffect } from "react"
import React from 'react'



export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
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
  /* Funcion para remover items del carrito */
  const removeCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const sacarProducto = (id, count, item) => {
    const removeCart = (id) => {
      setCart(cart.filter(item => item.id !== id));
    };

    const eliminarUnidad = (id) => {
      let producto = cart.findIndex(item => item.id === id);
      if(producto !== -1){
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


  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, removeCart, buy, removeCartAll, sacarProducto }}>
        {children}
      </CartContext.Provider>

    </>
  )
}

export default CartContextProvider

