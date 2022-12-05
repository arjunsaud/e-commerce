import React from 'react'
import {Outlet } from 'react-router-dom'
import Footer from '../layout/Footer'
import MyNav from '../layout/MyNav'

const LayoutWrapper = () => {
  return (
      <div>
        <MyNav/>
        <Outlet/>
        <Footer/>
      </div>
  )
}

export default LayoutWrapper