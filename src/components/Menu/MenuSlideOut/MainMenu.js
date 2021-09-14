import React from "react"
import { Link } from "gatsby"
import { Heading1 } from "../../StyledComponents/typography.css"
import { MainMenuWrapper, MainMenuItem } from "../menu.css"
import SubMenu from "./SubMenu"
import MenuOpenArrow from "./MenuOpenArrow"

const menuItems = [
  { title: "Home", slug: "/"},
  { title: "Venues", slug: "/"},
  { title: "Events", slug: "/"},
  { title: "Sample Menus", slug: "/"},
  { title: "FAQ's", slug: "/faqs"},
  { title: "Contact", slug: "/"},
]

const MainMenu = ({ active, setActive, subMenuOpen, setSubMenuOpen }) => {
  return (
    <MainMenuWrapper>
      {menuItems.map((item, index) => (
        <Link key={index} to={item.slug}>
          <MainMenuItem
            marginBottom="sm"
            link
            onMouseOver={() => setActive(item.title)}
            item={item.title}
            active={active}
          >
            {item.title}
            {item.title === "Events" ? (
              <MenuOpenArrow
                setsubMenuOpen={setSubMenuOpen}
                subMenuOpen={subMenuOpen}
                active={active}
                item={item.title}
              />
            ) : null}
          </MainMenuItem>
        </Link>
      ))}
      <SubMenu active={active} setActive={setActive} />
    </MainMenuWrapper>
  )
}

export default MainMenu
