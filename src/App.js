import React from 'react';
import ItemListContainer from './components/Item/ItemListContainer';
import NavBar from './components/./Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';





export default function App() {
  return (

    <>
      
      <BrowserRouter>
        <NavBar/>
        
        <Routes>
          
          <Route exact path = '/' element={<ItemListContainer/>} />

          {/* ItemListContainer */}
          <Route exact path = '/' element={<ItemListContainer/>} />
          <Route exact path = '/category/:categoryId' element={<ItemListContainer/>} />

          {/* ItemDetail */}
          <Route exact path = '/category/:categoryId/item/:id' element={<ItemDetailContainer/>} />
          
        </Routes>
        
        
      </BrowserRouter>
      
    </>
    
    
  );
}


