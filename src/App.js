import React from 'react';
import ItemListContainer from './components/Item/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';





export default function App() {
  return (

    <>
      
      <BrowserRouter>
        <NavBar/>
        
        <Routes>
          
          <Route exact path = '/' element={<ItemListContainer/>} />
          <Route exact path = '/' element={<ItemListContainer/>} />
          <Route exact path = '/category/:categoryId' element={<ItemListContainer/>} />
          <Route exact path = '/item/:id' element={<ItemDetailContainer/>} />
          
        </Routes>
        
        
      </BrowserRouter>
      
    </>
    
    
  );
}


