import React from "react"
import Renderer from "../../Common/Rich-Text-Renderers/Intro"
import { SectionContainer } from "../../StyledComponents/containers.css"
import {  Heading1, Heading2 } from "../../StyledComponents/typography.css"

const Intro = ({introduction}) => {
  const [firstParagraphHeight, setFirstParagraphHeight] =  React.useState(0)

  const [isExpanded, setIsExpanded] = React.useState(false)
  console.log(isExpanded)
  return (
    <SectionContainer marginBottom="xl" >
      <Heading1 marginBottom="sm">Lorem ipsum dolor sit amet, consetetur</Heading1>
      <Renderer node={introduction} isExpanded={isExpanded}/>
      <Heading2
      onClick={() => setIsExpanded(!isExpanded)}
      > Learn More</Heading2>
    </SectionContainer>
  )
}

export default Intro
