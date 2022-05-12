import React, { useState, useRef } from "react";
import { BC2, Heading2, Heading3 } from "../../StyledComponents/typography.css"
import { AccordionSection, AccordionBlock, AccordionIcon, AccordionContent } from './Accordion.css'

const Accordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight + 16}px`
    );
  }

  return (
    <AccordionSection onClick={toggleAccordion}>
      <AccordionBlock>
        <Heading2>{props.title}</Heading2>
        <AccordionIcon className={`${setActive}`} /> 
      </AccordionBlock>
      <AccordionContent
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        <Heading3 marginBottom="sm">{props.subTitle}</Heading3>
        <BC2 marginBottom="sm">
          {props.content}
        </BC2>
      </AccordionContent>
    </AccordionSection>
  );
}

export default Accordion;
