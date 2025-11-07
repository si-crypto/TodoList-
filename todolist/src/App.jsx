import { useState } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Create from './Create';
import  Home from './Home'
import Menu from './Menu';
//import Create from './Create';
function App() {
  

  return (
    <div>


       
        <Routes>
   <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
   
    </Routes>
      
    </div>
  )
}

export default App
