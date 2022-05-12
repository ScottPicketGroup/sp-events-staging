import React from 'react'
import { LogoWrapper } from '../Common/Header/header.css'
import { MenuContainer } from '../StyledComponents/containers.css'
import Logo from './Logo'
import MenuSlideOut from './MenuSlideOut/MenuSlideOut'

const Menu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
    return (
      <>
        <LogoWrapper onClick={() => setMenuOpen(true)}>
          <Logo />  
         </LogoWrapper>
         <MenuSlideOut menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </>
    )
}

export default Menu
