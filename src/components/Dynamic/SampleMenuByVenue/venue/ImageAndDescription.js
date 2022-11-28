import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import ArrowIcon from "../../../../images/ArrowIcon"
import SPGRestaurantListRenderer from "../../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"
import { SectionContainer } from "../../../StyledComponents/containers.css"
import { Heading1,  Heading2,  Heading3 } from "../../../StyledComponents/typography.css"



import {
  PartnerVenuesLandingWrapper,
  TextContainer,
} from "./ImageAndDescription.css"

const ImageAndDescription = ({ venue }) => {

  return (
    <>
      <Heading1 marginBottom="sm">{venue.venueName}</Heading1>
      <PartnerVenuesLandingWrapper>
        <GatsbyImage image={getImage(venue.venueImage)} alt="Chancery Lane" />
        <TextContainer>
          <Heading2 marginBottom="xs">{venue.venueName}</Heading2>
          <Heading3 marginBottom="sm">{venue.subheadinge}</Heading3>
         <SPGRestaurantListRenderer node={venue.description} />
          {/* <Heading3>
            View venue site
            <ArrowIcon />
          </Heading3> */}
        </TextContainer>
      </PartnerVenuesLandingWrapper>
    </>
  )
}

export default ImageAndDescription
