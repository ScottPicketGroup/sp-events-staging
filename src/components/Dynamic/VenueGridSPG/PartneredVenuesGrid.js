import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import SPGRestaurantListRenderer from "../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"
import {
  FullImageContainer,
  GatsbyItemImgLink,
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

const PartneredVenuesGrid = ({ data }) => {
  return (
    <>
      {data.map((venue, i) => (
        <Item key={i}>
          <GatsbyItemImgLink to="/enquiries" link={true}>
            <FullImageContainer>
              <GatsbyImage
                image={getImage(venue.restaurantMedia[0])}
                style={{ aspectRatio: "4/3", width: `100%` }}
                alt=""
              />
            </FullImageContainer>

            <Heading2 marginTop=".5">{venue.restaurantName}</Heading2>
            <Heading3 marginTop=".25">{venue.location} </Heading3>

            <SPGRestaurantListRenderer node={venue.restaurantDescription} s />
            <Heading3 marginTop="sm">
              Enquire Now <ArrowIcon />
            </Heading3>
          </GatsbyItemImgLink>
        </Item>
      ))}
    </>
  )
}

export default PartneredVenuesGrid
