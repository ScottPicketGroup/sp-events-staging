import React from "react"
import { SubMenuWrapper, SubMenuItem } from "../menu.css"

const SubMenu = ({active, setActive}) => {
    const subMenu = ["Gallery", "Careers", "Enquires"]
  return (
    <SubMenuWrapper>
      {subMenu.map(item => (
        <SubMenuItem
          marginBottom="sm"
          link
          onMouseOver={() => setActive(item)}
          item={item}
          active={active}
        >
          {item}
        </SubMenuItem>
      ))}
    </SubMenuWrapper>
  )
}

export default SubMenu
