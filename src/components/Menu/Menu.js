import React from "react"
import { LogoWrapper,LogoContainer } from "../Common/Header/header.css"
import Logo from "./Logo"
import MenuSlideOut from "./MenuSlideOut/MenuSlideOut"

const Menu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  
  return (
    <>
      <LogoContainer onClick={() => setMenuOpen(true)}>
        <Logo />
      </LogoContainer>
      <MenuSlideOut menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  )
}

export default Menu
