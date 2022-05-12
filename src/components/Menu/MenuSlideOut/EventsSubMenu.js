import React from "react"
import { EventsSubMenuWrapper, EventsSubMenuItem } from "../menu.css"

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
