"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const LayoutProvider = ({ children }) => {

  // usePathname is a client hook; guard with fallback to avoid runtime issues
  const pathname = usePathname() || ""

  return (
    <>
      
        {pathname !== "/login" && pathname !== "/signup" && !pathname.includes("/admin") && <Navbar />}
        {children}
        {pathname !== "/login" && pathname !== "/signup" && !pathname.includes("/admin") && <Footer />}
     
    </>
  )
}

export default LayoutProvider
