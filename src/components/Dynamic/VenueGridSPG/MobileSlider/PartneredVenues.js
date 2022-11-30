import React from "react"
import ArrowIcon from "../../../../images/ArrowIcon"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SPGRestaurantListRenderer from "../../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"
import { Heading2, Heading3 } from "../../../StyledComponents/typography.css"
import { Card, FullImageContainer, ImageContainer, ItemImgLink } from "./RestaurantSlider"

export default function PartneredVenues({ active, data }) {
  return (
    <ImageContainer>
      {data.map((r, i) => (
        <Card key={i} i={i} active={active}>
          <ItemImgLink href={`${r.restaurantUrl}`} target="_blank" link={true}>
            <FullImageContainer>
              {r.restaurantMedia && (
                <GatsbyImage
                  image={getImage(r.restaurantMedia[0])}
                  style={{ aspectRatio: `3/2` }}
                />
              )}
            </FullImageContainer>
            <Heading2 marginTop=".5">{r.restaurantName}</Heading2>
            <Heading3 marginTop="xs" marginBottom="sm">{r.location} </Heading3>
            {r.restaurantDescription && (
              <SPGRestaurantListRenderer node={r.restaurantDescription} />
            )}
            <Heading3 marginTop="1.5">
              Enquire Now <ArrowIcon />
            </Heading3>
          </ItemImgLink>
        </Card>
      ))}
    </ImageContainer>
  )
}
