import React, { useState, useEffect } from "react"

import styled from "styled-components"
import { useSwipeable } from "react-swipeable"

import SPGRestaurantListRenderer from "../../../Common/Rich-Text-Renderers/SPGRestaurantsGridRenderer"
import { Heading2, Heading3 } from "../../../StyledComponents/typography.css"
import SPGSpaces from "./SPGSpaces"
import PartneredVenues from "./PartneredVenues"

const RestaurantSlider = ({ data }) => {
  const [numSlides, setNumSlides] = useState(data.length)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let numSlidesToSet = 0
  //set let
  // map through venues and add number of function areas to let if there are function areas
   data.map((venue, i) => venue.functionAreas ? numSlidesToSet = numSlidesToSet + venue.functionAreas.length  : numSlidesToSet = data.length)
   setNumSlides(numSlidesToSet )
  }, [data])

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      active >= 0 && active < numSlides - 1 ? setActive(active + 1) : null,
    onSwipedRight: () =>
      active > 0 && active < numSlides ? setActive(active - 1) : null,
  })

  return (
    <Container {...handlers}>
      <ImageContainer>
        {data.map((r, i) =>
          r.functionAreas ? (
            <SPGSpaces r={r} active={active}  data={data} key={i}/>
          ) : (
            <PartneredVenues r={r} active={active} i={i} key={i}/>
          )
        )}
      </ImageContainer>
    </Container>
  )
}
export default RestaurantSlider

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;

  overflow: hidden;
  top: 100px;
`

export const Slide = styled.div`
  position: absolute;
  top: 50;
  z-index: ${props => props.id};
  transition: margin-left 0.5s ease-in-out;
  margin-left: ${props =>
    props.id + props.counter <= 1
      ? "0"
      : `${(props.id - 1 + props.counter) * 155}px`};
`

export const FullImageContainer = styled.div`
  display: inline;
  aspect-ratio: 4/3;
  height: 100%;
  width: 100%;
`
export const ItemImgLink = styled.a`
  text-decoration: none;

  color: #333333;
  &:hover {
    opacity: ${props => (props.link ? 0.5 : 1)};
  }
`
export const Container = styled.div`
  width: 95vw;

  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;

  overflow: hidden;
`

export const ImageContainer = styled.div`
  min-height: 30rem;
  width: 100vw;

  position: relative;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
`

export const Card = styled.div`
  width: 75vw;
  margin-left: ${props =>
    props.active === props.i ? "0vw" : `${(props.i - props.active) * 80}vw`};
  transition: margin-left 550ms ease-out;
  position: absolute;
  top: 0;
  background: white;
`
