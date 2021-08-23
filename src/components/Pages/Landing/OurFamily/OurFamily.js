import React from 'react'
import { SectionContainer, SectionWrapper } from "../../../StyledComponents/containers.css"
import { Heading1 } from '../../../StyledComponents/typography.css'
import RestaurantGrid from './Restaurants/RestaurantGrid'
const OurFamily = () => {
    return (
        <SectionContainer background="lightgrey" width="100%" full>
            <SectionWrapper>
            <Heading1>
                Our Family
            </Heading1>
            </SectionWrapper>
            <RestaurantGrid/>
        </SectionContainer>
    )
}

export default OurFamily
