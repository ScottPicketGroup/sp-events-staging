import React, { useRef} from "react"

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Slide, SliderContainer } from "./GallerySlider.css"
import {SectionContainer } from "../../StyledComponents/containers.css"

const GallerySlider = ({ images }) => {
  const mouseDownRef = useRef(null)
  const [imageArr] = React.useState(images)
  const [counter, setCounter] = React.useState(0)

  const handleOnMouseDown = e => {
    mouseDownRef.current = e.screenX
  }

  const handleDragEnd = e => {
   
    if(e.screenX > mouseDownRef.current) setCounter(counter + 1)
    else if (e.screenX < mouseDownRef.current) setCounter(counter - 1)
  }

  return (
    <SectionContainer >
    <SliderContainer draggable="true" >
      
      {imageArr &&
        imageArr.map((image, id) => (
          <Slide
          ref={mouseDownRef}
            id={id}
            counter={counter}
            onTouchStart={handleOnMouseDown}
            onTouchEnd={handleDragEnd}
            onMouseDown={handleOnMouseDown}
            onDragEnd={handleDragEnd}
            key={id}
          >
            <GatsbyImage
              image={getImage(image)}
              
              alt="instagram image"
              key={id}
            />
          </Slide>
        ))}
    </SliderContainer>
    </SectionContainer>
  )
}

export default GallerySlider

// activeslide + id * 150px
