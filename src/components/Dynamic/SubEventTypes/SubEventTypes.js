import React from "react"
import {
  SectionContainer,
  SectionWrapper,
} from "../../StyledComponents/containers.css"
import { Heading1 } from "../../StyledComponents/typography.css"
import EventTypesGrid from "./EventTypesGrid"

const SubEventTypes = ({ data }) => {
  const { heading, greyBackground, optionsCollection } = data

  return (
    <SectionContainer
     
      
      isGreyBackground={greyBackground}
      width="100vw"
      paddingTop="lg"
      paddingBottom="lg"
    >
      <SectionWrapper width="73.5%">
        <Heading1 marginBottom="md">{heading}</Heading1>
        <EventTypesGrid eventTypes={optionsCollection} />
      </SectionWrapper>
    </SectionContainer>
  )
}

export default SubEventTypes
