import React from 'react'
import { Heading1 } from '../../StyledComponents/typography.css'
import { MainMenuWrapper, MainMenuItem } from '../menu.css'
import SubMenu from './SubMenu'
import MenuOpenArrow from './MenuOpenArrow'

const menuItems = [
    "Home",
    "Venues",
    "Events",
    "Sample Menus",
    "FAQ's",
    "Contact",
  ]

const MainMenu = ({active, setActive, subMenuOpen, setSubMenuOpen}) => {
    
    return (
        <MainMenuWrapper>
            
            {menuItems.map(item => (
              <MainMenuItem
                marginBottom="sm"
                link
                onMouseOver={() => setActive(item)}
                item={item}
                active={active}
              >
                {item}
                {item === "Events" ? (
                  <MenuOpenArrow setsubMenuOpen={setSubMenuOpen} subMenuOpen={subMenuOpen} active={active} item={item}/>
                ) : null}
              </MainMenuItem>
            ))}
      <SubMenu active={active} setActive={setActive} />
      </MainMenuWrapper>
    )
}

export default MainMenu
