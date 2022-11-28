import React from "react"
import useWindowSize from "../../Common/Hooks/useWindowDimensions"
import {
  SectionContainer,
  SectionWrapper,
} from "../../StyledComponents/containers.css"
import { Heading1 } from "../../StyledComponents/typography.css"
import RestaurantGrid from "./RestaurantGrid"
import RestaurantSlider from "./MobileSlider/RestaurantSlider"

const VenueGrid = ({ data }) => {
  const { heading, greyBackground } = data
  const { width } = useWindowSize()

 
  return (
    <SectionContainer
      paddingTop="lg"
      isGreyBackground={greyBackground}
      width="100vw"
      paddingBottom="lg"
    >
      <SectionWrapper width="73.5%">
        <Heading1 marginBottom="sm">{heading}</Heading1>
        {width > 751 ? (
          <RestaurantGrid data={data.venues} />
        ) : (
          <RestaurantSlider data={data.venues} />
        )}
        {/* <RestaurantGrid data={data.venues} /> */}
      </SectionWrapper>
    </SectionContainer>
  )
}

export default VenueGrid
