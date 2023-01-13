import React, { useRef } from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import InstaSlider from "../../../Common/InstaSlider/InstaSlider"
import { Heading1 } from "../../../StyledComponents/typography.css"
import {
  SectionContainer,
} from "../../../StyledComponents/containers.css"
import {
  DesktopWrapper,
  MobileWrapper,
} from "../../../Common/Header/header.css"

const FollowUsOnSocial = ({ images }) => {
  const myRef = useRef(null)

  return (
    <SectionContainer
      marginTop=""
      marginBottom="xl"
      overflow="true"
      ref={myRef}
    >
      <Heading1 marginBottom="sm">Follow us on social</Heading1>
      <DesktopWrapper>
        {/* <Grid cols={4} full insta="1.25rem 1.25rem">
          {images &&
            images.edges.map((image, i) =>
              i < 8 ? (
                <Item key={image.node.id}>
                  <Heading1></Heading1>
                  <GatsbyImage
                    image={getImage(image.node.localFile)}
                    alt={image.node.id}
                    style={{minHeight: `12vh`}}
                  />
                </Item>
              ) : null
            )}
        </Grid> */}
      </DesktopWrapper>
      <MobileWrapper><InstaSlider images={images} /></MobileWrapper>
    </SectionContainer>
  )
}

export default FollowUsOnSocial
