import React from "react"
import styled from "styled-components"
import { Heading1 } from "../../StyledComponents/typography.css"
import { EventsSubMenuWrapper, EventsSubMenuItem } from "../menu.css"
import MenuOpenArrow from "./MenuOpenArrow"

const eventsSubMenu = [
  "Weddings",
  "Private Events",
  "Corporate Events & Functions",
  "Major Events",
]

const EventsSubMenu = ({ active, setActive, subMenuOpen, setSubMenuOpen }) => {
  const [activeSub, setSubActive] = React.useState("")

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
      {eventsSubMenu.map((item, index) => (
        <EventsSubMenuItem
          key={index}
          marginBottom="sm"
          link
          onMouseOver={() => setSubActive(item)}
          item={item}
          subMenuOpen={subMenuOpen}
          active={activeSub}
        >
          {item}
        </EventsSubMenuItem>
      ))}
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
