import React from "react"
import {
  SectionContainer,
  SectionWrapper,
} from "../../StyledComponents/containers.css"
import {
  BC1,
  Heading1,
  Heading2,
  IntroLink,
} from "../../StyledComponents/typography.css"
import Renderer from "../../Common/Rich-Text-Renderers/IntroRenderer"
import ArrowIcon from "../../../images/ArrowIcon"
const Intro = ({ data }) => {
  const {
    heading,
    greyBackground,
    introHalfWidth,
    introduction,
    linkLabel,
    linkUrl,
  } = data

  return (
    <SectionContainer
      paddingTop="lg"
      isGreyBackground={greyBackground}
      width="100vw"
      paddingBottom="lg"
    >
      <SectionWrapper width="73.5%">
        <Heading1 marginBottom="sm">{heading}</Heading1>
        <Renderer node={introduction} />
        {linkLabel && linkUrl !== null && linkUrl.includes("http://") ? (
          <Heading2>
            <a
              href={`${linkUrl}`}
              target="_blank"
              style={{ textDecoration: `none` }}
            >
              {linkLabel} <ArrowIcon />
            </a>
          </Heading2>
        ) : linkUrl !== null ? (
          <IntroLink to={`/${linkUrl}`}>
            {" "}
            <Heading2>
              {linkLabel} <ArrowIcon />
            </Heading2>
          </IntroLink>
        ) : null}
      </SectionWrapper>
    </SectionContainer>
  )
}

export default Intro
