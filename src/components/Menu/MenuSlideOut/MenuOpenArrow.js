import React from "react"
import { MenuOpenArrowWrapper } from "../menu.css"

const MenuOpenArrow = ({ active, item, setSubMenuOpen, subMenu }) => {
  return (
    <MenuOpenArrowWrapper
    active={active}
    item={item}
    subMenu
    >
      <svg
        style={{ marginLeft: !subMenu ? `8rem` : '', stroke: subMenu ? "rgba(255, 255, 255, 50%)" : '', transform: subMenu ? 'rotate(190deg)' : '' }}
        xmlns="http://www.w3.org/2000/svg"
        width="9.15"
        height="15.472"
        viewBox="0 0 9.15 15.472"
        
      >
        <g
          id="Group_6315"
          data-name="Group 6315"
          transform="translate(-1153.323 -351.918)"
        >
          <path
            id="Path_12030"
            data-name="Path 12030"
            d="M7.028,14.058,0,7.029,7.028,0"
            transform="translate(1161.059 366.684) rotate(-180)"
            fill="none"
           
            strokeWidth="2"
          />
        </g>
      </svg>
    </MenuOpenArrowWrapper>
  )
}

export default MenuOpenArrow
