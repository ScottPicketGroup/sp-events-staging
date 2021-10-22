import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Heading2, Heading3 } from "../../StyledComponents/typography.css"
import {
  FullImageContainer,
  Grid,
  Item,
  ItemImgGatsbyLink,
} from "../../StyledComponents/containers.css"

import ArrowIcon from "../../../images/ArrowIcon"
import SPGRestaurantListRenderer from "../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"

const PartiesAndEventsGrid = ({ partiesEvents }) => {

  return (
    <Grid cols={2} colsMob={1} full>
      {partiesEvents &&
        partiesEvents.map((item, i) => (
          <Item key={i}>
            <ItemImgGatsbyLink to={`/events/${item.pageName.toLowerCase().replace(" ", "-")}`}>
              <FullImageContainer>
                <GatsbyImage image={getImage(item.heroMedia[0])} />
              </FullImageContainer>
              <Heading2 marginTop="sm">{item.pageName}</Heading2>
              <Heading3 marginTop="xs" marginBottom="xs">
                {item.subHeadingForLandingPage}
              </Heading3>
              <SPGRestaurantListRenderer node={item.introduction} />
              <Heading3 marginTop="sm">
                Discover More &nbsp;
                <ArrowIcon />
              </Heading3>
            </ItemImgGatsbyLink>
          </Item>
        ))}
    </Grid>
  )
}

export default PartiesAndEventsGrid
