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
            {sampleMenuArray[1].accordion.map((item, index) => (
              <AccordionWithImage
                key={index}
                title={item.title}
                content={item.content}
                description={item.description}
                // image={imageDatas.allFile.nodes.filter(item => item.name === "accordion")[0].childImageSharp}
              />
            ))}
          </SectionContainer>
        </div>

       ))}

        

      </PageContainer>
    </PageWrapper>
  )
}

export default SampleMenus
