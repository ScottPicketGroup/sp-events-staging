import React from "react"
import { SectionContainer } from "../../StyledComponents/containers.css"
import { BC1, Heading1, Heading2 } from "../../StyledComponents/typography.css"

const Intro = () => {
  return (
    <SectionContainer marginBottom="xl" >
      <Heading1 marginBottom="sm">Lorem ipsum dolor sit amet, consetetur</Heading1>
      <BC1 marginBottom="md">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </BC1>
      <Heading2> Learn More</Heading2>
    </SectionContainer>
  )
}

export default Intro
