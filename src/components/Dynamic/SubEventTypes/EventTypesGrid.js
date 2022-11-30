import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { GridSubHeading, Heading2 } from "../../StyledComponents/typography.css"
import {
  FullImageContainer,
  Grid,
  Item,
  ItemImgGatsbyLink,
} from "../../StyledComponents/containers.css"

import ArrowIcon from "../../../images/ArrowIcon"
import Renderer from "../../Common/Rich-Text-Renderers/IntroRenderer"

const EventTypesGrid = ({ eventTypes }) => {
  return (
    <Grid cols={2} colsMob={1} full>
      {eventTypes &&
        eventTypes.map((item, i) => (
          <Item key={i}>
            {item.linkUrl ? (
              <ItemImgGatsbyLink to={`${item.linkUrl ? item.linkUrl : ""}`}>
                <FullImageContainer>
                  <GatsbyImage
                    image={getImage(item.image)}
                    style={{ aspectRatio: `3/2` }}
                  />
                </FullImageContainer>
                <Heading2 marginTop="1">{item.optionName}</Heading2>
                <GridSubHeading marginBottom="xs">
                  {item.subHeading}
                </GridSubHeading>
                {item.description && <Renderer node={item.description} />}
                {item.linkUrl && item.linkLabel && (
                  <GridSubHeading>
                    {item.linkLabel} <ArrowIcon />
                  </GridSubHeading>
                )}
              </ItemImgGatsbyLink>
            ) : 
            <>
             <FullImageContainer>
                  <GatsbyImage
                    image={getImage(item.image)}
                    style={{ aspectRatio: `3/2` }}
                  />
                </FullImageContainer>
                <Heading2 marginTop="1">{item.optionName}</Heading2>
                <GridSubHeading marginBottom="xs">
                  {item.subHeading}
                </GridSubHeading>
                {item.description && <Renderer node={item.description} />}
                {item.linkUrl && item.linkLabel && (
                  <GridSubHeading>
                    {item.linkLabel} <ArrowIcon />
                  </GridSubHeading>
                )}
            </>
            }
          </Item>
        ))}
    </Grid>
  )
}

export default EventTypesGrid
