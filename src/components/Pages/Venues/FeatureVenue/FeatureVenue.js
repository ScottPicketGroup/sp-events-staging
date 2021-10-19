import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import ArrowIcon from "../../../../images/ArrowIcon"
import SPGRestaurantListRenderer from "../../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"
import { SectionContainer, SectionWrapper } from "../../../StyledComponents/containers.css"
import { BC3, Heading1, Heading2, Heading3 } from "../../../StyledComponents/typography.css"
import { PartnerVenuesLandingWrapper, TextContainer } from "./FeatureVenue.css"
const FeatureVenue = ({featuredPartnerVenue}) => {
   const {location, subHeading, restaurantName, restaurantDescription} =  featuredPartnerVenue.featuredRestaurant

   console.log(location)
  return (
    <SectionContainer background={featuredPartnerVenue.greyBackground ? "lightgrey" : ""} width="100vw" >
      <SectionWrapper width="73.5%">
        <Heading1 marginBottom="sm" marginTop="lg">{restaurantName}</Heading1>
        <PartnerVenuesLandingWrapper>
          <StaticImage
            placeholder="blurred"
            src="../../../../images/OurFamily/estelle.png"
            alt="Chancery Lane"
            style={{
              width: `75%`,
              marginBottom: `3.75rem`,
            }}
          />
          <TextContainer>
            <Heading2 marginBottom="xs">{restaurantName}</Heading2>
            <Heading3 marginBottom="sm">{subHeading}</Heading3>
            <SPGRestaurantListRenderer node={restaurantDescription} />
            <Heading3>Discover Move <ArrowIcon/></Heading3>
          </TextContainer>
        </PartnerVenuesLandingWrapper>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default FeatureVenue
