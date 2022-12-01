import React, { useState, useRef } from "react"
import { BC2, Heading2, Heading3 } from "../../StyledComponents/typography.css"
import Renderer from "../Rich-Text-Renderers/IntroRenderer"
import {
  AccordionSection,
  AccordionBlock,
  AccordionIcon,
  AccordionContent,
  AccordianBlockTitle,
} from "./Accordion.css"

const Accordion = props => {
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
        <Heading2 faq>{props.title}</Heading2>
        <AccordionIcon className={`${setActive}`} />
      </AccordionBlock>
      <AccordionContent ref={content} style={{ maxHeight: `${setHeight}` }} faq={props.faq}>
        <Heading3 marginBottom="xs">{props.subTitle}</Heading3>
        {props.content && (
          <BC2 marginBottom="sm" marginTop="sm">
            {props.content}
          </BC2>
        )}
        {props.answer && <Renderer node={props.answer} />}
      </AccordionContent>
    </AccordionSection>
  )
}

export default Accordion
