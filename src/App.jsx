import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import "./App.css"
import Login from './LoginPage/Login.jsx';
import MakingBad from './MakingBad/MakingBad.jsx'
import Register from './Register/Register.jsx';
import InitPage from './InitPage/InitPage.jsx';
import YourChoice from './yourChoice/YourChoice.jsx';
import Scale from './Scale/Scale.jsx';
import MakingGood from './MakingGood/MakingGood.jsx';
import ShowTheProduct from './ShowTheProduct/ShowTheProduct.jsx';
import ToFriend from './ToFriend/ToFriend.jsx';
import BadScale from './BadScale/BadScale.jsx'
import GetTheMilkTea from './GetTheMilkTea/GetTheMilkTea.jsx';
import ShowTheBadProduct from './ShowTheBadProduct/ShowTheBadProduct.jsx';
import BadToFriend from './badToFriend/badToFriend.jsx'
import GetStinkyTea from './GetStinkyTea/GetStinkyTea.jsx' 
import MySelf from './MySelf/MySelf.jsx';
import MyFriend from './MyFriend/MyFriend.jsx';
import MyStore from './Store/MyStore.jsx'
import OtherStore from './Store/OtherStore.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/OtherStore' element={<OtherStore />}></Route>
        <Route path='/MyStore' element={<MyStore />}></Route>
        <Route path='/MyFriend' element={<MyFriend />}></Route>
        <Route path='/MySelf' element={<MySelf />}></Route>
        <Route path='/GetStinkyTea' element={<GetStinkyTea />}></Route>
        <Route path='/badToFriend' element={<BadToFriend />}></Route>
        <Route path='/ShowTheBadProduct' element={<ShowTheBadProduct />}></Route>
        <Route path='/MakingBad' element={<MakingBad />}></Route>
        <Route path='/BadScale' element={<BadScale />}></Route>
        <Route path='/GetTheMilkTea' element={<GetTheMilkTea />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Scale' element={<Scale />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/' element={<InitPage />}></Route>
        <Route path='/YourChoice' element={<YourChoice />}></Route>
        <Route path='/ShowTheProduct' element={<ShowTheProduct />}></Route>
        <Route path='/MakingGood' element={<MakingGood />}></Route>
        <Route path='/ToFriend' element={<ToFriend />}></Route>
      </Routes>
    </BrowserRouter>

  )
}