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

const FollowUsOnSocial = ({  }) => {
  const myRef = useRef(null)
  
  const images = useInstgramImages()
  const data = {urls: images.map(img => img.url), images: images.map(img => img.image)}

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
       
         {images &&
            images.map((item, i) =>
              i < 8 ? (
                <Item key={i}>
                  <a href={`${item.url}`} target="_blank" >
                  <Heading1></Heading1>
                  <GatsbyImage
                    image={getImage(item.image.gatsbyImageData)}
                    alt={item.image.title}
                    style={{ minHeight: `12vh`, aspectRatio:`1` }}
                  />
                  </a>
                </Item>
              ) : null
            )} 
        </Grid>
      </DesktopWrapper>
      <MobileWrapper>
        <DynamicSlider data={data} insta={true} />
      </MobileWrapper>
    </SectionContainer>
  )
}

export default FollowUsOnSocial
