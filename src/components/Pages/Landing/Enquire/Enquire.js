import React from "react"
import { SectionContainer, SectionWrapper } from "../../../StyledComponents/containers.css"
import {
  BC1,
  Heading1,
  Heading2,
} from "../../../StyledComponents/typography.css"
const Enquire = () => {
  return (
    <SectionContainer marginTop="lg" marginBottom="xl">
        <SectionWrapper width="100%">
      <Heading1 marginBottom="sm">Enquire</Heading1>
      <BC1 marginBottom="sm">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </BC1>
      <Heading2> Learn More</Heading2>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default Enquire
