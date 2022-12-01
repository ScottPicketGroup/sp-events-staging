import React from "react"
import { Link } from "gatsby"
import { MainMenuWrapper, MainMenuItem } from "../menu.css"
import SubMenu from "./SubMenu"
import MenuOpenArrow from "./MenuOpenArrow"
import { Heading1 } from "../../StyledComponents/typography.css"
import useWindowSize from "../../Common/Hooks/useWindowDimensions"

const menuItems = [
  { title: "Home", slug: "/" },
  { title: "About", slug: "/about" },
  { title: "Events" },
  { title: "Venues", slug: "/venues" },
  { title: "Sample Menus", slug: "/sample-menus" },
  { title: "FAQs", slug: "/faqs" },
  { title: "Contact", slug: "/enquiries" },
]

const MainMenu = ({ active, setActive, subMenuOpen, setSubMenuOpen }) => {
  const {width} = useWindowSize()
  return (
    <MainMenuWrapper>
      {menuItems.map((item, index) => (
        <MainMenuItem
        key={index}
          marginBottom="sm"
          link
          onMouseOver={() => setActive(item.title)}
          item={item.title}
          active={active}
        >
          {item.title === "Events" ? (
            <Heading1
              onClick={() => setSubMenuOpen(true)}
              onMouseOver={() => width > 500 ? setSubMenuOpen(true) : null}
              style={{ display: `flex` }}
              link
            >
              Event Types
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
            <Link to={item.slug} key={index}>
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
