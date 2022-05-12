import React from "react"
import { SectionContainer } from "../StyledComponents/containers.css"
import { BC1, Heading1, Heading2 } from "../StyledComponents/typography.css"
import ArrowIcon from "../../images/ArrowIcon"

const PageIntro = ({ title, intro, option }) => {
  return (
    <SectionContainer marginBottom="xl">
      <Heading1 marginBottom="sm">{title}</Heading1>
      <BC1 marginBottom="md">{intro}</BC1>
      <Heading2>
        {option ? "View Options" : "Learn More"}
        <ArrowIcon />
      </Heading2>
    </SectionContainer>
  )
}

export default PageIntro
