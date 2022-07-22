import React from "react"
import RestaurantSlider from "../../Common/GallerySlider/GallerySlider"
import { SliderContainer } from "../../Common/InstaSlider/InstaSlider.css"

import GalleryDescription from "./GalleryDescription"

const GallerySection = ({ title, content, images }) => {
  return (
    <>
      <RestaurantSlider images={images} />
      <GalleryDescription title={title} content={content} />

    </>
  )
}

export default GallerySection
