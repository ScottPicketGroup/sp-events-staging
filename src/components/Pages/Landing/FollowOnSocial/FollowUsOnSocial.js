import React, { useRef } from "react"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"

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

import { useInstgramImages } from "./useInstagramImages"

const FollowUsOnSocial = ({ data }) => {
  const myRef = useRef(null)
  

  const images = useInstgramImages()
console.log('images', images)
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
         {images &&
            images.map((image, i) =>
              i < 8 ? (
                <Item key={i}>
                  <Heading1></Heading1>
                  <GatsbyImage
                    image={getImage(image.childImageSharp.gatsbyImageData)}
                    alt={image.title}
                    style={{ minHeight: `12vh`, aspectRatio:`1` }}
                  />
                </Item>
              ) : null
            )} *
        </Grid>
      </DesktopWrapper>
      <MobileWrapper>
        <DynamicSlider data={data} insta={true} />
      </MobileWrapper>
    </SectionContainer>
  )
}

export default FollowUsOnSocial
