import React from "react"
import {
  SectionContainer,
  SectionWrapper,
} from "../../StyledComponents/containers.css"
import {
  Heading1,
  Heading2,
  IntroLink,
} from "../../StyledComponents/typography.css"
import Renderer from "../../Common/Rich-Text-Renderers/IntroRenderer"
import ArrowIcon from "../../../images/ArrowIcon"
const Enquire = ({ data }) => {
  const {
    enquireHeading,
    greyBackground,
    introHalfWidth,
    enquireDescription,
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
        <Heading1 marginBottom="sm">{enquireHeading}</Heading1>
        <Renderer node={enquireDescription} />
        {linkLabel && (
          <IntroLink to={`/${linkUrl}`}>
            {" "}
            <Heading2>
              {linkLabel} <ArrowIcon />
            </Heading2>
          </IntroLink>
        )}
      </SectionWrapper>
    </SectionContainer>
  )
}

export default Enquire
