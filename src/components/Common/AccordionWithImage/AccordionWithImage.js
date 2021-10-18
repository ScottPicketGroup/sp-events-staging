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
  BorderBottom,
  AccordionContentTextSection,
} from "./AccordionWithImage.css"

const AccordionWithImage = props => {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")

  const content = useRef(null)

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight + 16}px`
    )
  }

  return (
    <AccordionSection onClick={toggleAccordion}>
      <AccordionBlock>
        <Heading2>{props.title}</Heading2>
        <AccordionIcon className={`${setActive}`} />
      </AccordionBlock>
      <AccordionContent ref={content} style={{ maxHeight: `${setHeight}` }}>
        <AccordionContentText>
          {props.content.map((item, index) => (
            <AccordionContentTextSection key={index}>
              <BorderBottom>
                <Heading3 marginBottom="sm">{item.subTitle}</Heading3>
              </BorderBottom>
              {item.subContent.map((item, index) => (
                <BorderBottom key={index}>
                  <BC2 marginBottom="sm">{item}</BC2>
                </BorderBottom>
              ))}
            </AccordionContentTextSection>
          ))}
          <AccordionContentTextSection>
            <Heading3 marginBottom="sm">{props.description}</Heading3>
          </AccordionContentTextSection>
        </AccordionContentText>
        <AccordionContentImage>
          <GatsbyImage image={getImage(props.image)} alt="test" />
        </AccordionContentImage>
      </AccordionContent>
    </AccordionSection>
  )
}

export default AccordionWithImage
