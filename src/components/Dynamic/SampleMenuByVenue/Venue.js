import React from "react"
import ImageAndDescription from "./venue/ImageAndDescription"
import styled from "styled-components"
import AccordionWithImage from "../../Common/AccordionWithImage/AccordionWithImage"
import AccordionWithMenuSections from "../../Common/AccordionWithImage/AccordianWithMenuSections"
const Venue = ({ data }) => {
  console.log("data", data.accordionItemsCollection && data.accordionItemsCollection[0])

  return (
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
  )
}

export default Venue

export const VenueContainer = styled.div`
  width: 100%;
  margin-top: 3.5rem;
`
