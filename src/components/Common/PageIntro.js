import React from "react"
import { SectionContainer } from "../StyledComponents/containers.css"
import { Heading1, Heading2 } from "../StyledComponents/typography.css"
import Renderer from "./Rich-Text-Renderers/Intro"
import ArrowIcon from "../../images/ArrowIcon"

const PageIntro = ({ title, intro, option, none,  }) => {

  return (
    <SectionContainer marginBottom="xl">
      <Heading1 marginBottom="sm">{title}</Heading1>
      <Renderer node={intro} />
      {!none && (
        <Heading2>
          {option ? "View Options" : "Learn More"}
          <ArrowIcon />
        </Heading2>
      )}
    </SectionContainer>
  )
}

export default PageIntro
