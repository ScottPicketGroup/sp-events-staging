import React from "react"
import { RightContainer, SectionContainer } from "../../StyledComponents/containers.css"
import { Heading2, Heading3 } from "../../StyledComponents/typography.css"
import EventPageContentRenderer from "../../Common/Rich-Text-Renderers/EventPageContentRenderer"
import ArrowIcon from "../../../images/ArrowIcon"
import { SliderContainer } from "../../Common/InstaSlider/InstaSlider.css"

const GalleryDescription = ({ title, content }) => {
  return (
  
    <SectionContainer marginBottom="xl">
      <Heading2 marginBottom="sm">{title}</Heading2>
      <EventPageContentRenderer node={content} />
      <Heading3>
        View
        <ArrowIcon />
      </Heading3>
    </SectionContainer>
  
  )
}

export default GalleryDescription
