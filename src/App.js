
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Cart from './pages/cart';
import Navbar from './component/navbar';


function App() {
  return (
    <>
     <Navbar></Navbar>
      <Routes>
       
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </>
  );
}

export default App;
