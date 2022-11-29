import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { MenuContainer, MenuItem } from "../../StyledComponents/containers.css"
import { useLocation } from "@reach/router"
export function LeftMenu({ items, pageElements, executeScroll }) {
  const [menuItems, setMenuItems] = useState([])
  const [activeEl, setActiveEl] = useState(menuItems[0])
  const location = useLocation().pathname
  useEffect(() => {
    let menuitemsToPush = []
    pageElements.map((e, i) =>
      e.restaurants
        ? e.restaurants.map(venue => menuitemsToPush.push(venue.venueName))
        : e.leftMenuHeading == undefined
        ? menuitemsToPush.push("")
        : e.eventTypes
        ? menuitemsToPush.push({
            name: e.leftMenuHeading,
            subHeadings:
              location !== "/about" &&
              e.eventTypes.map(eventType => eventType.pageName),
          })
        : menuitemsToPush.push(e.leftMenuHeading)
    )
    setMenuItems(menuitemsToPush)
    setActiveEl(menuitemsToPush[0])
  }, [])

  // console.log(
  //   useLocation().pathname,
  //   menuItems
  // )

  const clickEl = (i, menuItem) => {
    executeScroll(i)
    setActiveEl(menuItem)
    console.log("menuItem, activeEl", menuItem, activeEl)
  }

  return (
    <MenuContainer>
      {items &&
        menuItems.map((menuItem, i) => (
          <>
            {typeof menuItem === "object" ? (
              <MenuItem
                key={i}
                onClick={() => clickEl(i, menuItem.name)}
                activeEl={activeEl}
                menuItem={menuItem}
              >
                {menuItem.name}
                {menuItem.subHeadings &&
                  menuItem.subHeadings.map((subHeading, i) => (
                    <MenuItem key={i}>
                      <Link
                        to={`/events/${subHeading
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {subHeading} >
                      </Link>
                    </MenuItem>
                  ))}
              </MenuItem>
            ) : menuItem === "" ? (
              ""
            ) : (
              <MenuItem
                key={i}
                onClick={() => clickEl(i, menuItem)}
                activeEl={activeEl}
                menuItem={menuItem}
              >
                {menuItem}
              </MenuItem>
            )}
          </>
        ))}
    </MenuContainer>
  )
}

export default LeftMenu
