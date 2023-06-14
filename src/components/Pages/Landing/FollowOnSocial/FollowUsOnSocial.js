import React, { useRef } from "react"
import styled from "styled-components"
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

import { useInstagramImages } from "./useInstagramImages"

const FollowUsOnSocial = ({}) => {
  const myRef = useRef(null)

  const images = useInstagramImages().instagramImages

  const data = {
    urls: images.map(img => img.url),
    images: images.map(img => img.image),
  }
  console.log("images", useInstagramImages())
  return (
    <>
      {images.length > 0 && (
        <SectionContainer
          marginTop="xl"
          marginBottom="xl"
          overflow="true"
          width="100vw"
          ref={myRef}
        >
          <SectionHeading
            marginBottom="sm"
            style={{
              //mobile styles
              // desktop styles add media query
              marginLeft: `26.5%`,
            }}
          >
            Follow us on socials
          </SectionHeading>
          <DesktopWrapper>
            <Grid cols={4} full insta="1.25rem 1.25rem">
              {images.map((item, i) =>
                i < 8 ? (
                  <ImageItem key={i}>
                    <a href={`${item.url}`} target="_blank">
                      <Heading1></Heading1>
                      <Image
                        src={item.image}
                        alt={item.image.title}
                        style={{ minHeight: `12vh`, aspectRatio: `1` }}
                      />
                    </a>
                  </ImageItem>
                ) : null
              )}
            </Grid>
          </DesktopWrapper>
          <MobileWrapper>
            {data.images.length > 0 && (
              <DynamicSlider data={data} insta={true} />
            )}
          </MobileWrapper>
        </SectionContainer>
      )}
    </>
  )
}

export default FollowUsOnSocial

export const SectionHeading = styled(Heading1)`
  margin-left: 26.5%;
  @media (max-width: 450px) {
    margin-left: 0;
  }
`
export const ImageItem = styled(Item)`
  height: 100%;
  width: 100%;
`
export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
