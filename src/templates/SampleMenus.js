import React, { useState, useRef, useEffect } from "react"

import {
  PageContainer,
  PageWrapper,
  MenuContainer,
  MenuItem,
  SectionContainer,
} from "../components/StyledComponents/containers.css"

import PageIntro from "../components/Common/PageIntro"
import ImageAndDescription from "../components/Pages/SampleMenus/ImageAndDescription"

import AccordionWithImage from "../components/Common/AccordionWithImage/AccordionWithImage"

import sampleMenuArray from "../contents/sampleMenuArray.json"
import AccordionWithMenuSections from "../components/Common/AccordionWithImage/AccordianWithMenuSections"


const SampleMenus = ({data}) => {
  const [menuItems, setMenuItems] =  React.useState([])
  

  useEffect(() => {
    const venues = []
    data.venueMenus.map(m => venues.push(m.venueName))
    const menuItemsToPush = ["Sample Menus", ...venues, "Enquire"]
    setMenuItems(menuItemsToPush)
  }, [data])



  const [items] = useState([])
  const [heights] = useState([])
  const [scrollY, setScrollY] = useState(0)

  const itemsRef = useRef([])

  const logit = () => setScrollY(window.pageYOffset)

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  useEffect(() => {
    itemsRef.current.forEach(i => {
      const meh = i.getBoundingClientRect()

      items.push(meh.top)
    })
    itemsRef.current.forEach(i => {
      const scrollTop = i.scrollHeight
      heights.push(scrollTop)
    })
    itemsRef.current = itemsRef.current.slice(0, items.length)
  }, [heights, items])

  const executeScroll = el =>
    itemsRef.current[el].scrollIntoView({ behavior: "smooth" })

  return (
    <PageWrapper>
      <MenuContainer>
        {items &&
          itemsRef.current &&
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
      <PageContainer>
        <div ref={el => (itemsRef.current[0] = el)}>
          <PageIntro
            title={data.pageTitle}
            intro={data.introduction}
          />
        </div>
       
       {data.venueMenus.map((venue, i) => (
        <div ref={el => (itemsRef.current[i + 1] = el)}>
          <ImageAndDescription
            data={venue}
            image={venue.venueImage}
          />
         <SectionContainer marginBottom="lg">
        {
          venue.canaps && <AccordionWithImage
               
          title="Canapés"
          content={venue.canaps}
          // description={item.description}
          image={venue.canapsImage}
        />
        }
              
              
             {venue.sitDownMenu && <AccordionWithMenuSections
               
               title="Sit Down Menu"
               content={venue.sitDownMenu}
               // description={item.description}
               image={venue.canapsImage}
             />}
             {venue.sharedTableMenu && 
             <AccordionWithMenuSections
               
             title="Shared Table Menu"
             content={venue.sharedTableMenu}
             // description={item.description}
             image={venue.canapsImage}
           />
             }

             {
               venue.drinksMenu &&  <AccordionWithImage
               
               title="Drinks"
               content={venue.drinksMenu}
               // description={item.description}
               image={venue.drinksMenuImage}
             />
             }
    
          </SectionContainer>
        </div>

       ))}

        

      </PageContainer>
    </PageWrapper>
  )
}

export default SampleMenus
