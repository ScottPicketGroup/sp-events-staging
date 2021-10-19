import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import ArrowIcon from "../../../../images/ArrowIcon"
import SPGRestaurantListRenderer from "../../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"
import { FullImageContainer, SectionContainer, SectionWrapper } from "../../../StyledComponents/containers.css"
import { BC3, Heading1, Heading2, Heading3 } from "../../../StyledComponents/typography.css"
import { PartnerVenuesLandingWrapper, TextContainer } from "./FeatureVenue.css"
const PartnerVenues = ({partnerVenuesSection}) => {
  //  const {location, subHeading, restaurantName, restaurantDescription} =  
console.log(partnerVenuesSection)

  return (
    <SectionContainer background="lightgrey" width="100vw" >
      <SectionWrapper width="73.5%">
        <Heading1 marginBottom="sm" marginTop="lg">{partnerVenuesSection.heading}</Heading1>
        <PartnerVenuesLandingWrapper>
        <FullImageContainer style={{marginBottom: `4rem`}}>
          <GatsbyImage image={getImage(partnerVenuesSection.partnerVenuesImage)}
          /></FullImageContainer>
          <TextContainer>
            <Heading2 marginBottom="xs">{partnerVenuesSection.heading}</Heading2>
            <Heading3 marginBottom="sm">{partnerVenuesSection.subHeading}</Heading3>
            <SPGRestaurantListRenderer node={partnerVenuesSection.introduction} /> 
            <Heading3>Discover Move <ArrowIcon/></Heading3>
          </TextContainer>
        </PartnerVenuesLandingWrapper>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default PartnerVenues
