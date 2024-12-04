import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div className='root_layout_container'>
        <Navigation />
        <div className='pages_container'>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default RootLayout