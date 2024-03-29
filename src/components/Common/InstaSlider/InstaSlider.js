import React, { useRef } from "react"
import { instagram } from "instagram-scraper-api";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Slide, SliderContainer } from "./InstaSlider.css"


const InstaSlider = ({ images }) => {
  const mouseDownRef = useRef(null)
  const [imageArr] = React.useState(images)
  const [counter, setCounter] = React.useState(0)

  const handleOnMouseDown = e => {
    mouseDownRef.current = e.screenX
  }

  const handleDragEnd = e => {
    if (e.screenX > mouseDownRef.current) setCounter(counter + 1)
    else if (e.screenX < mouseDownRef.current) setCounter(counter - 1)
  }

const user = instagram.user("marek.reid").then(data => console.log(data));

  return (
    <SliderContainer
      draggable="true"
      style={{
        overflow: `hidden`,
      }}
    >
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
              style={{
                position: `absolute`,
                width: `100%`,
                minHeight: "190px",
              }}
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
