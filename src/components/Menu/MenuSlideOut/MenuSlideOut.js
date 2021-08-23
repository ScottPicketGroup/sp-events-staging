import React from "react"
import Logo from "./Logo"
import { BC1, Heading1, Heading2 } from "../../StyledComponents/typography.css"
import {
  SlideOutContainer,
  MenuWrapper,
  MainMenuWrapper,
  SubMenuWrapper,
  MenuHeaderWrapper,
  MenuItemsContainer,
} from "../menu.css"
import CloseLogo from "./CloseLogo"

const menuItems = [
  "Home",
  "Venues",
  "Events",
  "Sample Menus",
  "FAQ's",
  "Contact",
]

const MenuSlideOut = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = React.useState("")
  const [subMenuOpen, setSubMenuOpen] = React.useState(false)
  const [activeSub, setSubActive] = React.useState("")

  const subMenu = ["Gallery", "Careers", "Enquires"]

  const eventsSubMenu = [
    "Weddings",
    "Private Events",
    "Corporate Events & Functions",
    "Major Events",
  ]

  return (
    <SlideOutContainer
      menuOpen={menuOpen}
      menuOpen={menuOpen}
      onClick={() => setMenuOpen(false)}
    >
      <MenuWrapper>
        <MenuHeaderWrapper
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(false)}
        >
          <Logo />
          <CloseLogo />
        </MenuHeaderWrapper>
        <MenuItemsContainer>
          <MainMenuWrapper>
            {menuItems.map(item => (
              <Heading1
                marginBottom="sm"
                link
                onMouseOver={() => setActive(item)}
                item={item}
                active={active}
              >
                {item}
                {item === "Events" ? (
                  <svg
                    style={{ marginLeft: `12rem` }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.15"
                    height="15.472"
                    viewBox="0 0 9.15 15.472"
                    onMouseOver={() => setSubMenuOpen(true)}
                  >
                    <g
                      id="Group_6315"
                      data-name="Group 6315"
                      transform="translate(-1153.323 -351.918)"
                    >
                      <path
                        id="Path_12030"
                        data-name="Path 12030"
                        d="M7.028,14.058,0,7.029,7.028,0"
                        transform="translate(1161.059 366.684) rotate(-180)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                ) : null}
              </Heading1>
            ))}
            <div
            style={{
              marginTop: `3rem`
            }}
            >
            {subMenu.map(item => (
              <Heading2
                marginBottom="sm"
                link
                onMouseOver={() => setSubActive(item)}
                item={item}
                active={activeSub}
              >
                {item}
              </Heading2>
            ))}
            </div>
          </MainMenuWrapper>
          <SubMenuWrapper active={active} subMenuOpen={subMenuOpen}>
            {eventsSubMenu.map(item => (
              <Heading2
                marginBottom="sm"
                link
                onMouseOver={() => setSubActive(item)}
                item={item}
                active={activeSub}
              >
                {item}
              </Heading2>
            ))}
          </SubMenuWrapper>
        </MenuItemsContainer>
      </MenuWrapper>
    </SlideOutContainer>
  )
}

export default MenuSlideOut
