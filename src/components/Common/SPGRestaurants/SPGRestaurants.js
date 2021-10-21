import React from 'react'
import { SectionContainer, SectionWrapper } from "../../../StyledComponents/containers.css"
import { Heading1 } from '../../../StyledComponents/typography.css'
import RestaurantGrid from './Restaurants/RestaurantGrid'
import useWindowDimensions from '../../../Common/Hooks/useWindowDimensions'
import RestaurantSlider from './Restaurants/RestaurantSlider'
const SPGRestaurants = ({restaurantList, title}) => {
    const {windowSize} = useWindowSize()
    console.log('b')
    return (
        <SectionContainer   marginBottom="xl">
            <SectionWrapper marginBottom="sm" marginTop="lg" width="100%">
            <Heading1>
              {title}
            </Heading1>
            </SectionWrapper>
           {width < 451 ? <>eat a dick</> : <RestaurantGrid restaurantList={restaurantList}/>} 
        </SectionContainer>
    )
}

export default SPGRestaurants
