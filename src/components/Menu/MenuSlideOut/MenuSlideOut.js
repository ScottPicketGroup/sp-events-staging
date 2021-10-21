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
import useWindowDimensions from "../../Common/Hooks/useWindowDimensions"
const MenuSlideOut = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = React.useState("")
  const [subMenuOpen, setSubMenuOpen] = React.useState(true)

const {width} = useWindowDimensions().width

  return (
    <SlideOutContainer menuOpen={menuOpen} >
      <MenuWrapper  menuOpen={menuOpen}>
        <MenuHeaderWrapper
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(false)}
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
