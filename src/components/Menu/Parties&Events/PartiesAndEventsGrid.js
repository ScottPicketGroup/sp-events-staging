import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  BC3,
  Heading2,
  Heading3,
} from "../../StyledComponents/typography.css"
import {
  FullImageContainer,
  Grid,
  Item,
  ItemImgLink,
} from "../../StyledComponents/containers.css"

import {partiesAndEvents} from './PartiesAndEventsArray'
import ArrowIcon from "../../../images/ArrowIcon"
import SPGRestaurantListRenderer from "../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"

const PartiesAndEventsGrid = ({partiesEvents}) => {
  console.log(partiesEvents)
  return (
    <Grid cols={2} colsMob={1} full>
      {partiesEvents &&
        partiesEvents.map((item, i) => (
          <Item
          key={i}
          >
            <ItemImgLink
              href="http://www.chancerylane.com.au "
              target="_blank"
              link={true}
            >
              <FullImageContainer>
                <GatsbyImage image={getImage(item.heroMedia[0])} />
              </FullImageContainer>
              <Heading2 marginTop="sm">{item.pageName}</Heading2>
              <Heading3 marginTop="xs" marginBottom="xs">{item.subHeadingForLandingPage}</Heading3>
              <SPGRestaurantListRenderer node={item.introduction} />
              <Heading3 marginTop="sm">Discover More    &nbsp;<ArrowIcon/></Heading3>
            </ItemImgLink>
          </Item>
        ))}
    </Grid>
  )
}

export default PartiesAndEventsGrid