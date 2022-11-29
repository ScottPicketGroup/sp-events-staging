import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Heading1 } from "../../StyledComponents/typography.css"
import { EventsSubMenuWrapper, EventsSubMenuItem } from "../menu.css"
import useMenudata, { data, useMenuEventItems } from "./menuEventTypesQuery"
import MenuOpenArrow from "./MenuOpenArrow"

const eventsSubMenu = [
  "Weddings",
  "Corporate Events",
  "Private Events",
  "Major Events",
]

const EventsSubMenu = ({ active, setActive, subMenuOpen, setSubMenuOpen }) => {
  const [activeSub, setSubActive] = React.useState("")
  const menuItems = useMenudata()

  const stuff = useMenudata()
console.log(menuItems[1].eventTypes)
  return (
    <EventsSubMenuWrapper subMenuOpen={subMenuOpen} active={active}>
      <MobileBackButtonWrapper>
        <MenuOpenArrow subMenu />
        <Heading1
          style={{ color: "rgba(255, 255, 255, 50%)" }}
          onClick={() => setSubMenuOpen(false)}
        >
          Back
        </Heading1>
      </MobileBackButtonWrapper>
      { menuItems[1].eventTypes.map((item, index) => (
       <Link to={`/events/${item.pageName.toLowerCase().replace(" ", "-")}`}>
          <EventsSubMenuItem
            key={index}
            marginBottom="sm"
            link
            onMouseOver={() => setSubActive(item)}
            item={item}
            subMenuOpen={subMenuOpen}
            active={activeSub}
          >
            {item.pageName}
          </EventsSubMenuItem>
        </Link>)
       
      )}
    </EventsSubMenuWrapper>
  )
}

export default EventsSubMenu

export const MobileBackButtonWrapper = styled.div`
  @media (min-width: 450px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    display: none;
  }
`
