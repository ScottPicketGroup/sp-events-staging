import React from "react"
import {
  SectionContainer,
  SectionWrapper,
} from "../../StyledComponents/containers.css"
import Venue from "./Venue"

const SampleMenuByVenue = ({ data }) => {
  const { greyBackground, restaurants } = data

  return (
    <SectionContainer
      paddingTop="lg"
      isGreyBackground={greyBackground}
      width="100vw"
      paddingBottom="lg"
    >
      <SectionWrapper width="73.5%">
        {restaurants.map((venue, i) => (
          <Venue venue={venue} key={i} />
        ))}
      </SectionWrapper>
    </SectionContainer>
  )
}

export default SampleMenuByVenue
