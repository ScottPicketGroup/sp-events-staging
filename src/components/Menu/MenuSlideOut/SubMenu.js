import { Link } from "gatsby"
import React from "react"
import { SubMenuWrapper, SubMenuItem } from "../menu.css"

const SubMenu = ({ active, setActive }) => {
  const subMenu = [
    { title: "Careers", url: "https://www.scottpickettgroup.com.au/careers/" },
    { title: "Event Enquiries", url: "/enquiries" },
  ]
  return (
    <SubMenuWrapper>
      {subMenu.map((item, index) => (
        <>
          {item.url.includes("http") ? (
            <SubMenuItem
              key={index}
              marginBottom="1"
              link
              onMouseOver={() => setActive(item.title)}
              item={item.title}
              active={active}
            >
           <a href={item.url} target='_blank' style={{color: `inherit`, textDecoration:"none"}}>   {item.title}</a>
            </SubMenuItem>
          ) : (
            <Link href={item.url} onMouseOver={() => setActive(item.title)}>
              <SubMenuItem
                key={index}
                marginBottom="1"
                link
                onMouseOver={() => setActive(item.title)}
                item={item.title}
                active={active}
              >
                {item.title}
              </SubMenuItem>
            </Link>
          )}
        </>
      ))}
    </SubMenuWrapper>
  )
}

export default SubMenu
