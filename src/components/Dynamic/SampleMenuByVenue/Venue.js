import React from "react"
import ImageAndDescription from "./venue/ImageAndDescription"
import styled from "styled-components"
import AccordionWithImage from "../../Common/AccordionWithImage/AccordionWithImage"
import AccordionWithMenuSections from "../../Common/AccordionWithImage/AccordianWithMenuSections"
import {
  SectionContainer,
  SectionWrapper,
} from "../../StyledComponents/containers.css"
const Venue = ({ element, data }) => {
  console.log(
    "data",
    data.accordionItemsCollection && data.accordionItemsCollection[0]
  )

  return (
    <SectionContainer
      paddingTop="lg"
      isGreyBackground={element.greyBackground}
      width="100vw"
      
    >
      <SectionWrapper width="73.5%">
        <VenueContainer>
          <ImageAndDescription venue={data} />
          {data.accordionItemsCollection &&
            data.accordionItemsCollection.map((accordion, i) => (
              <AccordionWithImage
                title={accordion.heading}
                image={accordion.accordionImage}
                content={accordion.menuSectionsCollection}
                key={i}
              />
            ))}
        </VenueContainer>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default Venue

export const VenueContainer = styled.div`
  width: 100%;
`
