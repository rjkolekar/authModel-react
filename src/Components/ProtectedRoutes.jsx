import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const auth = localStorage.getItem("user")
  return (
    <>
    auth ? <Outlet></Outlet> : <Navigate to="/register" />
    </>
  )
}

export default ProtectedRoutes
