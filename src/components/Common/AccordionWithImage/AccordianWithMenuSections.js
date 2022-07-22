import React, { useState, useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BC2, Heading2, Heading3 } from "../../StyledComponents/typography.css"
import {
  AccordionSection,
  AccordionBlock,
  AccordionIcon,
  AccordionContent,
  AccordionContentImage,
  AccordionContentText,
  AccordionContentTextSection,
} from "./AccordionWithImage.css"

const AccordionWithMenuSections = ({content, title, image}) => {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")

  const contentContainer = useRef(null)

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${contentContainer.current.scrollHeight + 16}px`
    )
  }


  return (
    <AccordionSection onClick={toggleAccordion} setActive={setActive}>
      {/* Accordian Title / closed state */}
      <AccordionBlock>
        <Heading2>{title}</Heading2>
        <AccordionIcon className={`${setActive}`} />
      </AccordionBlock>

    {/* Accordian open state + menus /menu items */}

     <AccordionContent ref={contentContainer} style={{ maxHeight: `${setHeight}` }}>
    
   
        <AccordionContentText >
      {/* Entrees Section Heading */}
      <Heading3>{content[0].entrees}</Heading3>
      {/* Map entree menu Items */}
          {content[0].entreeMenuItems.map((item, index) => (
            <AccordionContentTextSection key={index}>
                <BC2 marginBottom="sm">{item.menuItem}</BC2>
            </AccordionContentTextSection>
          ))}

          {/* Main Section Heading */}
      <Heading3>{content[0].main}</Heading3>
      {/* Map Main menu Items */}
          {content[0].mainMenuItems.map((item, index) => (
            <AccordionContentTextSection key={index}>
                <BC2 marginBottom="sm">{item.menuItem}</BC2>
            </AccordionContentTextSection>
          ))}


                {/* Main Section Heading */}
      <Heading3>{content[0].dessertsHeading}</Heading3>
      {/* Map Main menu Items */}
          {content[0].mainMenuItems.map((item, index) => (
            <AccordionContentTextSection key={index}>
                <BC2 marginBottom="sm">{item.menuItem}</BC2>
            </AccordionContentTextSection>
          ))}

        </AccordionContentText>

       
      
      {/* image */}
        <AccordionContentImage>
          <GatsbyImage image={getImage(image)} alt="test" />
        </AccordionContentImage>
      </AccordionContent> 


    </AccordionSection>
  )
}

export default AccordionWithMenuSections
