import React from 'react'
import { SectionContainer } from '../../StyledComponents/containers.css'
import { Heading1 } from '../../StyledComponents/typography.css'
import Slider from './Slider/Slider'

const SliderGallery = () => {
    return (
       <SectionContainer marginBottom="xl">
           <Heading1 marginBottom="sm">
               Gallery
           </Heading1>
           <Slider/>
       </SectionContainer>
    )
}

export default SliderGallery
