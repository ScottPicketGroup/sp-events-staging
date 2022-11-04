import React from "react"
import {
  SectionContainer,
  SectionWrapper,
} from "../../StyledComponents/containers.css"
import { Heading1 } from "../../StyledComponents/typography.css"
import EventTypesGrid from "./EventTypesGrid"

const EventTypes = ({ data }) => {
  const { heading, isGreybackground, eventTypes } = data
  return (
    <SectionContainer
      marginTop="lg"
      marginBottom="lg"
      isGreybackground
      width="100vw"
      eventTypes
    >
      <SectionWrapper width="73.5%">
        <Heading1 marginBottom="md">{heading}</Heading1>
        <EventTypesGrid eventTypes={eventTypes} />
      </SectionWrapper>
    </SectionContainer>
  )
}

export default EventTypes
