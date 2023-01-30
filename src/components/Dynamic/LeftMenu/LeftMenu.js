import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { MenuContainer, MenuItem } from "../../StyledComponents/containers.css"
import { useLocation } from "@reach/router"
import useWatchScroll from "../../Common/Hooks/useWatchScroll"
export function LeftMenu({ items, pageElements, executeScroll, itemsRef }) {
  const [menuItems, setMenuItems] = useState([])
  const [activeEl, setActiveEl] = useState(0)
  const location = useLocation().pathname

  useEffect(() => {
    let menuitemsToPush = []
    pageElements.map((e, i) =>
      e.faqSectionCollection
        ? e.faqSectionCollection.map(faq =>
            menuitemsToPush.push(faq.leftMenuHeading)
          )
        : e.restaurants
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
  }, [])

  const { scrollDirection, scrollY } = useWatchScroll()
  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      const bcr = item.getBoundingClientRect()
      console.table('bcr.top, bcr.bottom, scrollY', bcr.top < 0 && bcr.top > 0 - bcr.height ,  bcr.top, i)
      if (scrollDirection == "up") {
        bcr.top < 0 && bcr.top > 0 - bcr.height&& setTimeout(setActiveEl(i), 500)
      } else if (scrollDirection === "down") {
        bcr.top < 0 && bcr.top > 0 - bcr.height && setTimeout(setActiveEl(i), 500)
      }
    })
  }, [scrollY])

  const clickEl = (i, menuItem) => {
    executeScroll(i)
    setActiveEl(i)
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
                i={i}
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
                i={i}
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
