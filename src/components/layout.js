
import * as React from "react"
import './layout.css'

import Header from "../components/Common/Header/Header"
import Footer from "./Common/Footer/Footer"


const Layout = ({ children }) => {
  

  return (
    <div
   
    >
      <Header />
      <div
        
      >
        <main>{children}</main>
       <Footer />
       
        
      </div>
    </div>
  )
}



export default Layout
