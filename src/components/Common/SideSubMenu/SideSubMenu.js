import React from "react"
import { MenuContainer, MenuItem } from "../../StyledComponents/containers.css"
export function SideSubMenu({
  items,
  menuItems,
  heights,
  executeScroll,
  scrollY,
}) {
  return (
    <MenuContainer>
      {items &&
        menuItems.map((menuItem, i) => (
          <MenuItem
            key={i}
            onClick={() => executeScroll(i)}
            sH={items[i]}
            sT={heights[i]}
            scrollY={scrollY}
          >
            {menuItem}
          </MenuItem>
        ))}
    </MenuContainer>
  )
}
