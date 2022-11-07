import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { SectionContainer } from "../../StyledComponents/containers.css"

const FullScreenStaticImage = ({ data }) => {

  return (
    <SectionContainer width="100vw" marginBottom="lg" fullScreen>
      <GatsbyImage
        image={getImage(data.image)}
        style={{ aspectRatio: `16/9` }}
      />
    </SectionContainer>
  )
}

export default FullScreenStaticImage
