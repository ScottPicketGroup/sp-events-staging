import React, { useState, useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BC2, Heading2 } from "../../StyledComponents/typography.css"
import {
  AccordionSection,
  AccordionBlock,
  AccordionIcon,
  AccordionContent,
  AccordionContentImage,
  AccordionContentText,
  AccordionContentTextSection,
} from "./AccordionWithImage.css"

const AccordionWithImage = ({content, title, image}) => {
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
     
          {content.map((item, index) => (
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

export default AccordionWithImage
