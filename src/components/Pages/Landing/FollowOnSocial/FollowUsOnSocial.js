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

const FollowUsOnSocial = ({ data }) => {
  const myRef = useRef(null)
  const placeHolderArr = data.images

  return (
    <SectionContainer
      marginTop="xl"
      marginBottom="xl"
      overflow="true"
      ref={myRef}
    >
      <Heading1 marginBottom="sm">Follow us on social</Heading1>
      <DesktopWrapper>
        <Grid cols={4} full insta="1.25rem 1.25rem">
        {placeHolderArr.map((image, i) =>
        <div style={{height: `280px`, aspectRatio: `1`, background: `grey`}} key={i}>{i}</div>
        )}
          {/* {images &&
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
            )} */}
        </Grid>
      </DesktopWrapper>
      {/* <MobileWrapper><InstaSlider images={images} /></MobileWrapper> */}
    </SectionContainer>
  )
}

export default FollowUsOnSocial
