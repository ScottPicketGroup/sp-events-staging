import React from 'react'
import { SectionContainer, SectionWrapper } from "../../../StyledComponents/containers.css"
import { Heading1 } from '../../../StyledComponents/typography.css'
import RestaurantGrid from './Restaurants/RestaurantGrid'
import useWindowSize from '../../../Common/Hooks/useWindowDimensions'
const OurFamily = () => {

    return (
        <SectionContainer   marginBottom="xl">
            <SectionWrapper marginBottom="sm" marginTop="lg" width="100%">
            <Heading1>
                Our Family
            </Heading1>
            </SectionWrapper>
            <RestaurantGrid/>
        </SectionContainer>
    )
}

export default OurFamily
