import React from 'react'
import './App.css'
import { Navigate, Route, Routes, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Admin from './Pages/Admin/Admin'
import ProtectedRoute from './Hooks/ProtectedRoute'
import Login from './Pages/Login/Login'
import Facturas from './Pages/Facturas/Facturas'
import VisualizadorFactura from './Pages/VisualizadorFactura/VisualizadorFactura'
import { Ventas } from './Pages/Ventas/Ventas'




function Dashboard() {

  return (
    <Outlet />
  );
}

function DashboardHome() {
  return (
    <div>
      Home
      <h2>Este es el home</h2>
    </div>
  );
}
function DashboardSettings() {
  return (
    <div>
      Setting
      <h2 className='text-white'>Este es settings</h2>
    </div>
  );
}





function App() {

  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Facturas/>}/>
        <Route path="/ventas" element={<Ventas/>}/>
        <Route path="/register" element={<ProtectedRoute Component={Home}/>}/>
        <Route path="/admin" element={<ProtectedRoute Component={Admin}/>}/>
        <Route path="/facturas" element={<Facturas/>}/>
        <Route path="/ver-factura" element={<VisualizadorFactura/>}/>





        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>



      </Routes>
    </>
  )
}

export default App
