import React, { useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Admin from './Pages/Admin/Admin'
import ProtectedRoute from './Hooks/ProtectedRoute'
import Login from './Pages/Login/Login'
import Facturas from './Pages/Facturas/Facturas'

function App() {

  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<ProtectedRoute Component={Home}/>}/>
        <Route path="/admin" element={<ProtectedRoute Component={Admin}/>}/>
        <Route path="/facturas" element={<Facturas/>}/>
      </Routes>
    </>
  )
}

export default App
