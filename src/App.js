import React from 'react';
import ItemListContainer from './components/Item/ItemListContainer';
import NavBar from './components/./Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartDetail from './components/Cart/CartDetail';
import CartContextProvider from './components/Context/CartContext.jsx'




export default function App() {
  return (

    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
        
          <Routes>
          
            <Route exact path = '/' element={<ItemListContainer/>} />

            {/* ItemListContainer */}
            <Route exact path = '/' element={<ItemListContainer/>} />
            <Route exact path = '/category/:categoryId' element={<ItemListContainer/>} />

            {/* ItemDetail */}
            <Route exact path = '/category/:categoryId/item/:id' element= {<ItemDetailContainer/>} />

            {/* Cart */}
            <Route exact path = '/cart' element={<CartDetail/>} />

          </Routes>
        
        
        </BrowserRouter>
      </CartContextProvider>

      
      
    </>
    
    
  );
}


