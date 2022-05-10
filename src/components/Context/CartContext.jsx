import { createContext, useState } from "react"
import React from 'react'



  export const CartContext = createContext();

  const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item) => {
      const indexItem = cart.findIndex((cartItem)=>cartItem.id === item.id);
      if(indexItem !== -1){
        const newCart = [...cart];
        newCart[indexItem].count = newCart[indexItem].count + item.count;
        setCart(newCart)
      }else{
        setCart([...cart, item])
      }
    };
    const removeCart = (id) => setCart(cart.filter(item => item.id !== id));
    const removeCartAll =  () => setCart([]);
    const buy = () => setCart([]);
    
    return (
      <>
      <CartContext.Provider value={{ cart, addToCart, removeCart, buy, removeCartAll }}>
        {children}
      </CartContext.Provider>

    </>
  )
}

export default CartContextProvider

