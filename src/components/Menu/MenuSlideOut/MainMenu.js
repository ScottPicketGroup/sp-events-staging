import React from "react"
import { Link } from "gatsby"
import { MainMenuWrapper, MainMenuItem } from "../menu.css"
import SubMenu from "./SubMenu"
import MenuOpenArrow from "./MenuOpenArrow"
import { Heading1 } from "../../StyledComponents/typography.css"

const menuItems = [
  { title: "Home", slug: "/" },
  { title: "Venues", slug: "/venues" },
  { title: "Events" },
  { title: "Sample Menus", slug: "/sample-menus" },
  { title: "FAQ's", slug: "/faqs" },
  { title: "Contact", slug: "/enquiries" },
]

const MainMenu = ({ active, setActive, subMenuOpen, setSubMenuOpen }) => {
  return (
    <MainMenuWrapper>
      {menuItems.map((item, index) => (
        <MainMenuItem
          marginBottom="sm"
          link
          onMouseOver={() => setActive(item.title)}
          item={item.title}
          active={active}
        >
          {item.title === "Events" ? (
            <Heading1
              onClick={() => setSubMenuOpen(true)}
              onMouseOver={() => setSubMenuOpen(true)}
              style={{ display: `flex` }}
            >
              Events{" "}
              {item.title === "Events" ? (
                <MenuOpenArrow
                  setsubMenuOpen={setSubMenuOpen}
                  subMenuOpen={subMenuOpen}
                  active={active}
                  item={item.title}
                />
              ) : null}{" "}
            </Heading1>
          ) : (
            /*ignore jslint start*/
            <Link to={item.slug}>
              {" "}
              <MainMenuItem
                marginBottom="sm"
                link
                onMouseOver={() => setActive(item.title)}
                item={item.title}
                active={active}
              >
                {item.title}{" "}
              </MainMenuItem>
            </Link>
            /*ignore jslint end*/
          )}
        </MainMenuItem>
      ))}
      <SubMenu
        active={active}
        setActive={setActive}
        setsubMenuOpen={setSubMenuOpen}
      />
    </MainMenuWrapper>
  )
}

export default MainMenu
