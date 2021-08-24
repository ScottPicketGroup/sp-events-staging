import React from "react"
import { Heading2 } from "../../StyledComponents/typography.css"
import { SubMenuWrapper } from "../menu.css"

const SubMenu = ({active, setActive}) => {
    const subMenu = ["Gallery", "Careers", "Enquires"]
  return (
    <SubMenuWrapper>
      {subMenu.map(item => (
        <Heading2
          marginBottom="sm"
          link
          onMouseOver={() => setActive(item)}
          item={item}
          active={active}
        >
          {item}
        </Heading2>
      ))}
    </SubMenuWrapper>
  )
}

export default SubMenu
