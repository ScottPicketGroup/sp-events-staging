import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import {
  GridSubHeading,
  Heading2
} from "../../StyledComponents/typography.css"
import {
  FullImageContainer,
  Grid,
  Item,
  ItemImgGatsbyLink,
} from "../../StyledComponents/containers.css"

import ArrowIcon from "../../../images/ArrowIcon"

const EventTypesGrid = ({ eventTypes }) => {


  return (
    <Grid cols={2} colsMob={1} full eventTypes>
      {eventTypes &&
        eventTypes.map((item, i) => (
          <Item key={i}>
            <ItemImgGatsbyLink
              to={`/events/${item.pageName.toLowerCase().replace(" ", "-")}`}
            >
              <FullImageContainer>
                <GatsbyImage
                  image={getImage(item.heroElement.heroImage)}
                  style={{ aspectRatio: `3/2` }}
                />
              </FullImageContainer>
              <Heading2 marginTop="1">{item.pageName}</Heading2>
              <GridSubHeading marginBottom="xs">
                {item.subheadingForGrid}
              </GridSubHeading>

              <GridSubHeading>
                Discover More <ArrowIcon />
              </GridSubHeading>
            </ItemImgGatsbyLink>
          </Item>
        ))}
    </Grid>
  )
}

export default EventTypesGrid
