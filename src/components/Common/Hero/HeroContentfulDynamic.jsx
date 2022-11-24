import React from "react"
import { getImage } from "gatsby-plugin-image"
import { HeroImage } from "./Hero.css"
import Renderer from "../Rich-Text-Renderers/HeroRenderer"
import { HeroContainer } from "../../StyledComponents/containers.css"

const Hero = ({ data }) => {
  const { heroImage, heroText } = data
  const image = getImage(heroImage)
  return (
    <HeroContainer>
      <HeroImage image={image} alt="test" />
     {heroText &&  <Renderer node={heroText} />}
    </HeroContainer>
  )
}

export default Hero
