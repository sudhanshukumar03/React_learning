import React from 'react'
import Header from './components/Header/Header'

import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'//it will use layout as base and make the changes

function Layout() {
  return (
    <div>
    <Header />
    <Outlet />
    <Footer />
    

    </div>
  )
}
export default Layout;


//header and footer will be same and it make changes in outlet
