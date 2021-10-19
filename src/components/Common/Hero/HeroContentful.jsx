import React from 'react'
import { getImage} from "gatsby-plugin-image"
import { HeroImage } from './Hero.css'


const Hero = ({image}) => {
    const heroImage = getImage(image)
  
    return (
   
            <HeroImage image={heroImage} alt="test"/>
    
    )
}

export default Hero
