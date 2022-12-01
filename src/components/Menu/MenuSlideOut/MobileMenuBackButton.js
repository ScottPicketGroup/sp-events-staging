import React from "react"
import { MenuOpenArrowWrapper } from "../menu.css"

const MobileMenuBackButton = ({ active, item, setSubMenuOpen, subMenu }) => {
  return (
    <MenuOpenArrowWrapper active={active} item={item} subMenu>
      <svg
        style={{marginTop: `.5rem`}}
        xmlns="http://www.w3.org/2000/svg"
        width="24.103"
        height="14.771"
        viewBox="0 0 24.103 14.771"
      >
        <g
          id="Group_6222"
          data-name="Group 6222"
          transform="translate(171.061 1045.531) rotate(180)"
        >
          <path
            id="Path_11622"
            data-name="Path 11622"
            d="M-14697.941-10580.853l-6.855-6.855,6.855-6.855"
            transform="translate(-14534.797 -9549.563) rotate(-180)"
            fill="none"
            stroke="#7e7e7e"
            stroke-width="1.5"
          />
          <path
            id="Path_11623"
            data-name="Path 11623"
            d="M-14704.8-10578.06h23.042"
            transform="translate(-14534.797 -9539.914) rotate(-180)"
            fill="none"
            stroke="#7e7e7e"
            stroke-width="1.5"
          />
        </g>
      </svg>
    </MenuOpenArrowWrapper>
  )
}

export default MobileMenuBackButton
