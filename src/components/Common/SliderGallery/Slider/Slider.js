import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { SliderPlaceholderWrapper } from "../SliderGallery.css"

const Slider = () => {
  return (
    <SliderPlaceholderWrapper>
      <StaticImage src="../../../../images/sliderpromo.png" alt="SliderPromo" />
    </SliderPlaceholderWrapper>
  )
}

export default Slider
