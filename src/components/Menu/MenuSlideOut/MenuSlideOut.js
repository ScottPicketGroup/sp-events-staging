import React from "react"
import Logo from "./Logo"
import {
  SlideOutContainer,
  MenuWrapper,
  MenuHeaderWrapper,
  MenuItemsContainer,
} from "../menu.css"
import CloseLogo from "./CloseLogo"
import MainMenu from "./MainMenu"
import EventsSubMenu from "./EventsSubMenu"

const MenuSlideOut = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = React.useState("")
  const [subMenuOpen, setSubMenuOpen] = React.useState(false)

  return (
    <SlideOutContainer menuOpen={menuOpen} >
      <MenuWrapper  menuOpen={menuOpen}>
        <MenuHeaderWrapper
          menuOpen={menuOpen}
          onClick={() => {setMenuOpen(false)
            setSubMenuOpen(false)}
          }
        >
          <Logo />
          <CloseLogo />
        </MenuHeaderWrapper>
        <MenuItemsContainer>
          <MainMenu
            active={active}
            setActive={setActive}
            subMenuOpen={subMenuOpen}
            setSubMenuOpen={setSubMenuOpen}
          />
          <EventsSubMenu active={active} setActive={setActive} subMenuOpen={subMenuOpen} setSubMenuOpen={setSubMenuOpen}/>
        </MenuItemsContainer>
        
      </MenuWrapper>
    </SlideOutContainer>
  )
}

export default MenuSlideOut
