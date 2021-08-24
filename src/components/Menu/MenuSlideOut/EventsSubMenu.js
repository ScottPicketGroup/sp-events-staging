import React from "react"
import { Heading2 } from "../../StyledComponents/typography.css"
import { EventsSubMenuWrapper } from "../menu.css"
import SubMenu from "./SubMenu"

const eventsSubMenu = [
  "Weddings",
  "Private Events",
  "Corporate Events & Functions",
  "Major Events",
]

const EventsSubMenu = ({active, setActive, subMenuOpen, setSubMenuOpen}) => {
  const [activeSub, setSubActive] = React.useState("")
console.log(activeSub)

  return (

      <EventsSubMenuWrapper subMenuOpen={subMenuOpen} active={active}>
        {eventsSubMenu.map(item => (
          <Heading2
            marginBottom="sm"
            link
            onMouseOver={() => setSubActive(item)}
            item={item}
            subMenuOpen={subMenuOpen}
            active={activeSub}
          >
            {item}
          </Heading2>
        ))}
      </EventsSubMenuWrapper>

  )
}

export default EventsSubMenu
