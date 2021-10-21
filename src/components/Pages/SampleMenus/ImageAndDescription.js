import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

import ArrowIcon from "../../../images/ArrowIcon"
import SPGRestaurantListRenderer from "../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"
import { SectionContainer } from "../../StyledComponents/containers.css"
import {

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
      <Heading1 marginBottom="sm">{data.venueName}</Heading1>
      <PartnerVenuesLandingWrapper>
        <GatsbyImage image={getImage(image)} alt="Chancery Lane" />
        <TextContainer>
          <Heading2 marginBottom="xs">{data.venueName}</Heading2>
          <Heading3 marginBottom="sm">{data.subheadinge}</Heading3>
         <SPGRestaurantListRenderer node={data.description} />
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
