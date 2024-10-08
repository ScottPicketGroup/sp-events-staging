import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import {
  FullImageContainer,
  Item,
  ItemImgLink,
} from "../../StyledComponents/containers.css"
import {
  BC2,
  BC3,
  Heading2,
  Heading3,
} from "../../StyledComponents/typography.css"
import ArrowIcon from "../images/ArrowIcon"

const SPGVenuesGrid = ({ data }) => {
  const [venues, setVenues] = useState([])

  useEffect(() => {
    const venuesToPush = []
    data.map((venue, i) => {
      let space = []
      venue.functionAreas.map(functionArea =>
        space.push({
          venue: venue.restaurantName,
          venueUrl: venue.restaurantUrl,
          space: functionArea,
        })
      )
      venuesToPush.push(space)
    })
    let finalToPush = []
    venuesToPush.map(venue => venue.map(v => finalToPush.push(v)))
    setVenues(finalToPush)
  }, [data])
  return (
    <>
      {venues.map((venue, i) => (
        <Item key={i}>
          <ItemImgLink href={`${venue.venueUrl}`} target="_blank" link={true}>
            <FullImageContainer>
              <GatsbyImage
                image={getImage(venue.space.image)}
                style={{ aspectRatio: "4/3" }}
                alt=""
              />
            </FullImageContainer>

            <Heading2 marginTop=".5" marginBottom="xs">
              {venue.space.spaceName}
            </Heading2>
            <BC3 >
              {venue.venue}{" "}
            </BC3>
            <BC3 marginBottom="0">{venue.space.regionCuisineStyle} </BC3>
            {venue.space.seatingCapacity && (
              <BC3 marginTop="sm" marginBottom="0">
                Seated Capacity: {venue.space.seatingCapacity}{" "}
              </BC3>
            )}
            <BC3 marginTop="0" marginBottom="md">
              {venue.space.standingCapacity != null &&
                `Standing Capacity: ${venue.space.standingCapacity}`}
            </BC3>
            {/* <SPGRestaurantListRenderer node={restaurant.restaurantDescription} /> */}
            <Heading3 marginTop="md">
              Learn More <ArrowIcon />
            </Heading3>
          </ItemImgLink>
        </Item>
      ))}
    </>
  )
}

export default SPGVenuesGrid
