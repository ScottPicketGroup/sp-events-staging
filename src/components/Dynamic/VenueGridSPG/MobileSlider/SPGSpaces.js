import React from "react"
import ArrowIcon from "../../../../images/ArrowIcon"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SPGRestaurantListRenderer from "../../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"
import { BC3, Heading2, Heading3 } from "../../../StyledComponents/typography.css"
import { Card, FullImageContainer, ItemImgLink } from "./RestaurantSlider"

export default function SPGSpaces({ r, i, active }) {
  return (
    <>
      {r.functionAreas.map((space, i) => (
        <Card key={i} i={i} active={active}>
         
          <ItemImgLink href={`${space.venueUrl}`} target="_blank" link={true}>
            <FullImageContainer>
              <GatsbyImage
                image={getImage(space.image)}
                style={{ aspectRatio: "4/3" }}
                alt=""
              />
            </FullImageContainer>

            <Heading2 marginTop=".5" marginBottom=".25rem">
              {space.spaceName}
            </Heading2>
            <BC3 marginTop="sm" marginBottom="0">
              {r.restaurantName}{" "}
            </BC3>
            <BC3 marginTop="0" marginBottom="0" >{space.regionCuisineStyle} </BC3>
            {space.seatingCapacity && (
              <BC3 marginTop="sm" marginBottom="0">
                Seated Capacity: {space.seatingCapacity}{" "}
              </BC3>
            )}
            <BC3 marginTop="0" marginBottom="md">
              {space.standingCapacity != null &&
                `Standing Capacity: ${space.standingCapacity}`}
            </BC3>
            {/* <SPGRestaurantListRenderer node={restaurant.restaurantDescription} /> */}
            <Heading3 marginTop="md">
              Learn More <ArrowIcon />
            </Heading3>
          </ItemImgLink>
       
        </Card>
      ))}
    </>
  )
}
