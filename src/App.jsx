import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import "./App.css"
import Login from './LoginPage/Login.jsx';
import BottomRooter from './BottomRooter/BottomRooter.jsx'
import Ladder from './Ladder/Ladder.jsx';
import Page from '../../Page.jsx';
import Register from './Register/Register.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path='/' element={<Login />}></Route>
        <Route path='/BottomRooter' element={<BottomRooter />}></Route>
        <Route path='/Page' element={<Page />}></Route>
        <Route path='/Register' element={<Register />}></Route>



      </Routes>
    </BrowserRouter>

  )
}