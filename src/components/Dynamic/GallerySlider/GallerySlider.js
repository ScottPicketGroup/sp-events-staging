import React from "react"
import { Heading1} from "../../StyledComponents/typography.css"
import styled from 'styled-components';
import { Card, Container, GalleryImage, ImageContainer } from "./GallerySlider.css"
import { getImage } from "gatsby-plugin-image"
import { useSwipeable } from "react-swipeable"
import Controls from "./Controls"
import Captions from "./Captions"

const DynamicSlider = ({ data }) => {
  const {images, heading} = data
  const [active, setActive] = React.useState(0)
  const [imagesArr, setImagesArr] = React.useState(images)
  React.useEffect(() => {
    if (data.images.length < 3) setImagesArr([...images, ...images])
  }, [])

  React.useEffect(() => {
    const newArr = [...imagesArr]
    newArr.push(imagesArr[active])
    setImagesArr(newArr)
  }, [active])

  console.log(data.images)
  const handlers = useSwipeable({
    onSwipedLeft: () => active >= 0 && active < imagesArr.length - 1 ? setActive(active + 1) : null,
    onSwipedRight: () => active >= 0 && active < imagesArr.length  ? setActive(active - 1) : null
  })

  return (

    <Container {...handlers}>
      <Heading1>{heading}</Heading1>
      <ImageContainer>
        {imagesArr &&
          imagesArr.map((image, i) => (
            <Card key={i} i={i} active={active}>
              <GalleryImage
                image={getImage(image)}
                style={{
                  width: `50vw`,
                  aspectRatio: `3/2`,
                }}
              /> 
              
              <Captions title={image.title}  i={i} active={active}/>  
            </Card>
          ))}
  
        <Controls
          active={active}
          setActive={setActive}
          limit={imagesArr.length}
        />
      </ImageContainer>
    </Container>
    
  )
}

export default DynamicSlider

