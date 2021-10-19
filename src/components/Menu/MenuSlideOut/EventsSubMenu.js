import React from "react"
import useWindowDimensions from "../../Common/Hooks/useWindowDimensions"
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
  const [width] = React.useState(useWindowDimensions().width)

  return (
    <EventsSubMenuWrapper subMenuOpen={subMenuOpen} active={active}>
      {width < 451 ? (
        <Heading1 style={{ color: "rgba(255, 255, 255, 50%)" }}
          onClick={() => setSubMenuOpen(false)}
        > <MenuOpenArrow
            subMenu
          /> Back</Heading1>
      ) : null}
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
