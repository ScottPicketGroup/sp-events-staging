import React from 'react'
import { SectionContainer, SectionWrapper } from '../../StyledComponents/containers.css'
import { Heading1 } from '../../StyledComponents/typography.css'
import RestaurantGrid from './RestaurantGrid'


const VenueGrid = ({data}) => {
    const {
        heading,
        greyBackground,
        
      } = data
    
  return (
    <SectionContainer
    paddingTop="lg"
    isGreyBackground={greyBackground}
    width="100vw"
    paddingBottom="lg"
  >
    <SectionWrapper width="73.5%">
    <Heading1 marginBottom="sm">{heading}</Heading1>
     
  <RestaurantGrid data={data.venues}/> 
  
        </SectionWrapper>
        </SectionContainer>
  )
}

export default VenueGrid