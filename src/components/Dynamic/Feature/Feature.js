import {  getImage } from "gatsby-plugin-image"
import React from "react"
import ArrowIcon from "../../../images/ArrowIcon"
import FeatureRenderer from "../../Common/Rich-Text-Renderers/FeatureRenderer"

import {
  FullImageContainer,
  SectionContainer,
  SectionWrapper,
} from "../../StyledComponents/containers.css"
import {
  Heading1,
  Heading2,
  Heading3,
  IntroLink,
} from "../../StyledComponents/typography.css"
import { FeatureImage, PartnerVenuesLandingWrapper, TextContainer } from "./Feature.css"
const Feature = ({ data }) => {

  const {
    heading,
    image,
    isGreyBackground,
    subHeading,
    secondSubHeading,
    introduction,
    linkLabel,
    linkUrl,
  } = data

  return (
    <SectionContainer width="100vw" isGreyBackground={isGreyBackground} paddingBottom="lg" paddingTop="lg" >
      <SectionWrapper width="73.5%">
        <Heading1 marginBottom="sm" >
          {heading}
        </Heading1>
        <PartnerVenuesLandingWrapper>
          <FullImageContainer >
            <FeatureImage image={getImage(image)} style={{ width: `100%` }} />
          </FullImageContainer>

          <TextContainer>
            <Heading2 marginBottom="xs">{subHeading}</Heading2>
            <Heading3 marginBottom="sm">{secondSubHeading}</Heading3>
            <FeatureRenderer node={introduction} />
            {
        linkLabel && <IntroLink to={`/${linkUrl}`}> <Heading2>{linkLabel} <ArrowIcon/></Heading2></IntroLink>
      }
          </TextContainer>
        </PartnerVenuesLandingWrapper>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default Feature
