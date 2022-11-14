import React from "react"
import ImageAndDescription from "./venue/ImageAndDescription"
import styled from "styled-components"
import AccordionWithImage from "../../Common/AccordionWithImage/AccordionWithImage"
import AccordionWithMenuSections from "../../Common/AccordionWithImage/AccordianWithMenuSections"
const Venue = ({ venue }) => {
 
  return (
    <VenueContainer>
      <ImageAndDescription venue={venue} />
      {venue.canaps && (
        <AccordionWithImage
          title="Canapés"
          content={venue.canaps}
          // description={item.description}
          image={venue.canapsImage}
        />
      )}
      {venue.sitDownMenu && (
        <AccordionWithMenuSections
          title="Sit Down Menu"
          content={venue.sitDownMenu}
          // description={item.description}
          image={venue.canapsImage}
        />
      )}
      {venue.sharedTableMenu && (
        <AccordionWithMenuSections
          title="Shared Table Menu"
          content={venue.sharedTableMenu}
          // description={item.description}
          image={venue.canapsImage}
        />
      )}

      {venue.drinksMenu && (
        <AccordionWithImage
          title="Drinks"
          content={venue.drinksMenu}
          // description={item.description}
          image={venue.drinksMenuImage}
        />
      )}
    </VenueContainer>
  )
}

export default Venue

export const VenueContainer = styled.div`
  width: 100%;
  margin-top: 3.5rem;
`
