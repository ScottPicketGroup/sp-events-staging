import React from "react"
import {
  SectionContainer,
  SectionWrapper,
} from "../../StyledComponents/containers.css"
import { Heading1 } from "../../StyledComponents/typography.css"
import EventTypesGrid from "./EventTypesGrid"

const EventTypes = ({ data }) => {
  const { heading, greyBackground, eventTypes } = data

  return (
    <SectionContainer
      isGreyBackground={greyBackground}
      width="100vw"
      paddingTop="lg"
      paddingBottom="lg"
    >
      <SectionWrapper width="73.5%">
        <Heading1 marginBottom="md">{heading}</Heading1>
        <EventTypesGrid eventTypes={eventTypes} />
      </SectionWrapper>
    </SectionContainer>
  )
}

export default EventTypes
