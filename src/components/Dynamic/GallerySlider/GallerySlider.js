import React from "react"
import { Heading1 } from "../../StyledComponents/typography.css"
import styled from "styled-components"
import {
  Card,
  Container,
  GalleryImage,
  ImageContainer,
} from "./GallerySlider.css"
import { getImage } from "gatsby-plugin-image"
import { useSwipeable } from "react-swipeable"
import Controls from "./Controls"
import Captions from "./Captions"
import { Item } from "../../StyledComponents/containers.css"

const DynamicSlider = ({ data, insta }) => {
  const { images, urls, heading } = data
  const [active, setActive] = React.useState(0)
  const [imagesArr, setImagesArr] = React.useState(images)
  console.log("data", data)
  React.useEffect(() => {
    if (data.images.length < 3) setImagesArr([...images, ...images])
  }, [])

  React.useEffect(() => {
    const newArr = [...imagesArr]
    newArr.push(imagesArr[active])
    setImagesArr(newArr)
  }, [active])

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      active >= 0 && active < imagesArr.length - 1
        ? setActive(active + 1)
        : null,
    onSwipedRight: () =>
      active >= 0 && active < imagesArr.length ? setActive(active - 1) : null,
  })

  return (
    <Container {...handlers} insta={insta}>
      {heading && <Heading1>{heading}</Heading1>}
      <ImageContainer insta={insta}>
        {imagesArr &&
          imagesArr.map((image, i) => (
            <a href={insta && `${urls[i]}`}>
              <Card key={i} i={i} active={active} insta={insta}>
                {!insta && (
                  <GalleryImage image={getImage(image)} insta={insta} />
                )}
                {insta && (
                  <ImageItem>
                    {" "}
                    <Image src={image} alt={image.title} />
                  </ImageItem>
                )}
                <Captions title={image.title} i={i} active={active} />
              </Card>
            </a>
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

export const ImageItem = styled(Item)`
  height: 100%;
  width: 100%;
`
export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
