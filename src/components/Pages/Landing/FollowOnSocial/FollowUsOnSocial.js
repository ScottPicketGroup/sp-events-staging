import React, {useRef} from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import InstaSlider from "../../../Common/InstaSlider/InstaSlider"
import { Heading1 } from "../../../StyledComponents/typography.css"
import {
  Grid,
  Item,
  SectionContainer,
} from "../../../StyledComponents/containers.css"
import { DesktopWrapper } from "../../../Common/Header/header.css"

const FollowUsOnSocial = () => {

  const myRef = useRef(null)
  const images = useStaticQuery(graphql`
    query InstaDemoImages {
      allFile(filter: { relativeDirectory: { in: "demoInstaSlider" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(aspectRatio: 1, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  return (
    <SectionContainer marginTop="4.25rem" marginBottom="9rem" overflow="true" ref={myRef}>
      <Heading1>Follow us on social</Heading1>
      <DesktopWrapper>
        <Grid cols={4} full insta="1.25rem 1.25rem">
          {images &&
            images.allFile.edges.map(image => (
              <Item key={image.node.id}>
                <Heading1 style={{ marginTop: `20rem` }}></Heading1>
                <GatsbyImage
                  image={getImage(image.node.childImageSharp)}
                  alt={image.node.id}
                />
              </Item>
            ))}
        </Grid>
      </DesktopWrapper>
      <InstaSlider images={images.allFile.edges} />
    </SectionContainer>
  )
}

export default FollowUsOnSocial
