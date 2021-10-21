import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import {

  Heading2,
  Heading3,
} from "../../../../StyledComponents/typography.css"
import {
  FullImageContainer,
  Grid,
  Item,
  ItemImgLink,
} from "../../../../StyledComponents/containers.css"


import ArrowIcon from "../../../../../images/ArrowIcon"
import SPGRestaurantListRenderer from "../../../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"


const RestaurantGrid = ({restaurantList}) => {
  console.log(restaurantList)
  return (
    <Grid cols={3} full>
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
               <GatsbyImage image={getImage(restaurant.restaurantMedia[0])} aspectRatio={4/3} style={{aspectRatio: `3/2`}}/>
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
