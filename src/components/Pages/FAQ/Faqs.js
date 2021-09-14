import React from "react"
import { SectionContainer } from "../../StyledComponents/containers.css"
import { BC1, Heading1, Heading2 } from "../../StyledComponents/typography.css"

const Faqs = () => {
  return (
    <SectionContainer marginBottom="xl" >
      <Heading1 marginBottom="sm">FAQs</Heading1>
      <BC1 marginBottom="md">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsa luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sectetur.
      </BC1>
      <Heading2>Learn More</Heading2>
    </SectionContainer>
  )
}

export default Faqs
