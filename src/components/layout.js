
import * as React from "react"
import './layout.css'

import Header from "../components/Common/Header/Header"


const Layout = ({ children }) => {
  

  return (
    <div
   
    >
      <Header />
      <div
        
      >
        <main>{children}</main>
        <footer
         
        >
       
        </footer>
      </div>
    </div>
  )
}



export default Layout
