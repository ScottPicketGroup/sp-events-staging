import React from "react"
import { SectionContainer } from "../../StyledComponents/containers.css"
import { Heading1 } from "../../StyledComponents/typography.css"
import Accordion from "../../Common/Accordion/Accordion"

const FAQSection = (props) => {
  return (
    <SectionContainer marginBottom="xl" >
      <Heading1 marginBottom="sm">{props.title}</Heading1>
      {props.content && props.content.length > 0 && props.content.map((item, index) => 
         <Accordion key={index}  title={item.title} subTitle={item.subTitle} content={item.content} />
      )}   
    </SectionContainer>
  )
}

export default FAQSection
