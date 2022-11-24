import React from "react"
import ImageAndDescription from "./venue/ImageAndDescription"
import styled from "styled-components"
import AccordionWithImage from "../../Common/AccordionWithImage/AccordionWithImage"
import AccordionWithMenuSections from "../../Common/AccordionWithImage/AccordianWithMenuSections"
const Venue = ({ venue }) => {
  const {heading, menuSectionsCollection} = venue
  console.log("venue", venue.menuSectionsCollection.accordionImage)

  return (
    <VenueContainer>
      <ImageAndDescription venue={venue} />
     
     <AccordionWithImage
          title={menuSectionsCollection.heading}
         image={menuSectionsCollection.accordionImage}
         content={menuSectionsCollection.menuSectionsCollection}
        /> 
  
    </VenueContainer>
  )
}

export default Venue

export const VenueContainer = styled.div`
  width: 100%;
  margin-top: 3.5rem;
`
