import React, { useRef} from "react"

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Slide, SliderContainer } from "./InstaSlider.css"
import { Heading1 } from "../../StyledComponents/typography.css"

const InstaSlider = ({ images }) => {
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
    <SliderContainer draggable="true" >
      <Heading1 onClick={() => setCounter(counter + 1)}>previous</Heading1>
      <Heading1 onClick={() => setCounter(counter - 1)}>next</Heading1>

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
              image={getImage(image.node.childImageSharp)}
              style={{ position: `absolute`, width: `145px` }}
              alt="instagram image"
              key={id}
            />
          </Slide>
        ))}
    </SliderContainer>
  )
}

export default InstaSlider

// activeslide + id * 150px
