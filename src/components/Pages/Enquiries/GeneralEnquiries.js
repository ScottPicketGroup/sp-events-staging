import React from "react"
import { SectionContainer } from "../../StyledComponents/containers.css"
import { BC1, Heading1 } from "../../StyledComponents/typography.css"

const GeneralEnquiries = () => {
  return (
    <SectionContainer marginBottom="xl">
      <Heading1 marginBottom="sm">General Enquiries</Heading1>
      <BC1>
        For general enquires, please contact us at the email address below:
      </BC1>
      <a href="http://loremipsum@spevents.com.au">
        <BC1>loremipsum@spevents.com.au</BC1>
      </a>
    </SectionContainer>
  )
}

export default GeneralEnquiries
