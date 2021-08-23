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
} from "../OurFamily.css"

import {restaurants} from "./restaurantArray"

const RestaurantGrid = () => {
  return (
    <Grid cols={3}>
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
                  style={{
                    marginBottom: `.5rem`,
                  }}
                />
              </FullImageContainer>
              <Heading2>{restaurant.name}</Heading2>
              <Heading3>{restaurant.location} / {restaurant.foodType}</Heading3>
              <BC3>
                {restaurant.description}
              </BC3>
              <Heading3>Visit</Heading3>
            </ItemImgLink>
          </Item>
        ))}
    </Grid>
  )
}

export default RestaurantGrid
