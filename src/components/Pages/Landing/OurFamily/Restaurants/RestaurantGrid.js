import { StaticImage } from "gatsby-plugin-image"
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

const RestaurantGrid = () => {
  return (
    <Grid cols={1} full>
      {restaurants &&
        restaurants.map((restaurant, i) => (
          <Item
          key={i}
          >
            <ItemImgLink
              href="http://www.chancerylane.com.au "
              target="_blank"
              link={true}
            >
              <FullImageContainer>
                <StaticImage
                  placeholder="blurred"
                  src="../../../../../images/OurFamily/estelle.png"
                  alt="Chancery Lane"
                  
                />
              </FullImageContainer>
              <Heading2 marginTop="sm">{restaurant.name}</Heading2>
              <Heading3 marginTop="xs">{restaurant.location} / {restaurant.foodType}</Heading3>
              <BC3 marginTop="sm" > 
                {restaurant.description} 
              </BC3 >
              <Heading3 marginTop="sm">Visit <ArrowIcon/></Heading3>
            </ItemImgLink>
          </Item>
        ))}
    </Grid>
  )
}

export default RestaurantGrid
