import React from "react"
import Renderer from "../../Common/Rich-Text-Renderers/Intro"
import { SectionContainer } from "../../StyledComponents/containers.css"
import { BC1, Heading1, Heading2 } from "../../StyledComponents/typography.css"

const Intro = ({introduction}) => {
  return (
    <SectionContainer marginBottom="xl" >
      <Heading1 marginBottom="sm">Lorem ipsum dolor sit amet, consetetur</Heading1>
      <Renderer node={introduction} />
      <Heading2> Learn More</Heading2>
    </SectionContainer>
  )
}

export default Intro
