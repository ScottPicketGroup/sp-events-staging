import React, { useState, useEffect } from "react"
import ArrowIcon from "../../../../images/ArrowIcon"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SPGRestaurantListRenderer from "../../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"
import {
  BC3,
  Heading2,
  Heading3,
} from "../../../StyledComponents/typography.css"
import { Card, FullImageContainer, ItemImgLink } from "./RestaurantSlider"

export default function SPGSpaces({ r, i, active, data }) {
  const [spaces, setSpaces] = useState([])

  useEffect(() => {
    let spacesToPush = []
    data.map((venue, i) => {
      console.log(venue)
      venue.functionAreas.map((functionArea,i ) => spacesToPush.push({
        venue: venue,
        functionArea: venue.functionAreas[i]
      }))
    })
    setSpaces(spacesToPush)
  }, [data])
console.log('spaces', spaces)
  return (
    <>
      {spaces.map((space, spaceI) => (
        <Card key={i} i={spaceI} active={active}>
          <ItemImgLink href={`${space.venueUrl}`} target="_blank" link={true}>
            <FullImageContainer>
              <GatsbyImage
                image={getImage(space.functionArea.image)}
                style={{ aspectRatio: "4/3" }}
                alt={space.functionArea.spaceName}
              />
            </FullImageContainer>

            <Heading2 marginTop=".5" marginBottom=".25rem">
              {space.functionArea.spaceName}
            </Heading2>
            <BC3 marginTop="sm" marginBottom="0">
              {space.venue.restaurantName}{" "}
            </BC3>
            <BC3 marginTop="0" marginBottom="0">
              {space.functionArea.regionCuisineStyle}{" "}
            </BC3>.functionArea
            {space.functionArea.seatingCapacity && (
              <BC3 marginTop="sm" marginBottom="0">
                Seated Capacity: {space.seatingCapacity}{" "}
              </BC3>
            )}
            <BC3 marginTop="0" marginBottom="md">
              {space.functionArea.standingCapacity != null &&
                `Standing Capacity: ${space.functionArea.standingCapacity}`}
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
