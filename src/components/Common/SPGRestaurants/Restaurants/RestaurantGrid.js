import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import {
  BC3,
  Heading2,
  Heading3,
} from "../../../../StyledComponents/typography.css"
import {
  FullImageContainer,
  Grid,
  Item,
  ItemImgLink,
} from "../../../../StyledComponents/containers.css"

import {restaurants} from "./restaurantArray"
import ArrowIcon from "../../../../../images/ArrowIcon"
import SPGRestaurantListRenderer from "../../../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"


const RestaurantGrid = ({restaurantList}) => {
 
  return (
    <Grid cols={6} full>
      {restaurantList &&
        restaurantList.map((restaurant, i) => (
          <Item
          key={i}
          >
            <ItemImgLink
              href="http://www.chancerylane.com.au "
              target="_blank"
              link={true}
            >
              <FullImageContainer>
               <GatsbyImage image={getImage(restaurant.restaurantMedia[0])}/>
              </FullImageContainer>
              <Heading2 marginTop="sm">{restaurant.restaurantName}</Heading2>
              <Heading3 marginTop="xs">{restaurant.location} </Heading3>
              <SPGRestaurantListRenderer node={restaurant.restaurantDescription} />
              <Heading3 marginTop="sm">Visit <ArrowIcon/></Heading3>
            </ItemImgLink>
          </Item>
        ))}
    </Grid>
  )
}

export default RestaurantGrid
