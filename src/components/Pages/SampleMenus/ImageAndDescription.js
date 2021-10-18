import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

import ArrowIcon from "../../../images/ArrowIcon"
import { SectionContainer } from "../../StyledComponents/containers.css"
import {
  BC3,
  Heading1,
  Heading2,
  Heading3,
} from "../../StyledComponents/typography.css"
import {
  PartnerVenuesLandingWrapper,
  TextContainer,
} from "./ImageAndDescription.css"

const ImageAndDescription = ({ data, image }) => {
  return (
    <SectionContainer marginBottom="md">
      <Heading1 marginBottom="sm">{data.title}</Heading1>
      <PartnerVenuesLandingWrapper>
        <GatsbyImage image={getImage(image)} alt="Chancery Lane" />
        <TextContainer>
          <Heading2 marginBottom="xs">{data.title}</Heading2>
          <Heading3 marginBottom="sm">{data.subTitle}</Heading3>
          <BC3 marginBottom="sm">{data.content}</BC3>
          <Heading3>
            View venue site
            <ArrowIcon />
          </Heading3>
        </TextContainer>
      </PartnerVenuesLandingWrapper>
    </SectionContainer>
  )
}

export default ImageAndDescription
