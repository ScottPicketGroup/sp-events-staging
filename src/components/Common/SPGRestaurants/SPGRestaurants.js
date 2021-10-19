import React from 'react'
import { SectionContainer, SectionWrapper } from "../../../StyledComponents/containers.css"
import { Heading1 } from '../../../StyledComponents/typography.css'
import RestaurantGrid from './Restaurants/RestaurantGrid'
const SPGRestaurants = ({restaurantList, title}) => {

    return (
        <SectionContainer   marginBottom="xl">
            <SectionWrapper marginBottom="sm" marginTop="lg" width="100%">
            <Heading1>
              {title}
            </Heading1>
            </SectionWrapper>
            <RestaurantGrid restaurantList={restaurantList}/>
        </SectionContainer>
    )
}

export default SPGRestaurants
