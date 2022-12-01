import React, { useRef } from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import InstaSlider from "../../../Common/InstaSlider/InstaSlider"
import { Heading1 } from "../../../StyledComponents/typography.css"
import {
  Grid,
  Item,
  SectionContainer,
} from "../../../StyledComponents/containers.css"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../Common/Header/header.css"
import DynamicSlider from "../../../Dynamic/GallerySlider/GallerySlider"

const FollowUsOnSocial = ({ data }) => {
  const myRef = useRef(null)
  const placeHolderArr = data.images
console.log('data.heading', data.images)
  return (
    <SectionContainer
      marginTop="xl"
      marginBottom="xl"
      overflow="true"
      ref={myRef}
    >
      <Heading1 marginBottom="sm">{data.pageName}</Heading1>
      <DesktopWrapper>
        <Grid cols={4} full insta="1.25rem 1.25rem">
        {/* {placeHolderArr.map((image, i) =>
        <div style={{height: `280px`, aspectRatio: `1`, background: `grey`}} key={i}>{i}</div>
        )} */}
          {data.images &&
            data.images.map((image, i) =>
              i < 8 ? (
                <Item key={i}>
                  <Heading1></Heading1>
                  <GatsbyImage
                    image={getImage(image)}
                    alt={image.title}
                    style={{minHeight: `12vh`}}
                  />
                </Item>
              ) : null
            )}
        </Grid>
      </DesktopWrapper>
      <MobileWrapper><DynamicSlider data={data} insta={true}/></MobileWrapper>
    </SectionContainer>
  )
}

export default FollowUsOnSocial
