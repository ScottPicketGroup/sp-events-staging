import styled, { keyframes } from "styled-components"
import { BC3 } from "../../StyledComponents/typography.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Container = styled.div`
  width: 72.1%;
  float: right;
  padding-top: 3.75rem;
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  margin-bottom: 5rem;
  overflow: hidden;
  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 0 0 5rem -1rem;
        }};
`

export const ImageContainer = styled.div`
  margin-top: 2.25rem;
  width: 100vw;
  height: 33vw;
  position: relative;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  z-index: 2;
  @media screen and (max-width: 450px) {
    
    height: 66.666666666667vw;
    min-width: 100%;
    
        }};
`

export const Card = styled.div`
  height: 100%;
  width: 75vw;
  margin-left: ${props =>
    props.active === props.i + 1
      ? "0vw"
      : `${(props.i - props.active) * 60}vw`};
  transition: margin-left 550ms cubic-bezier(0.435, 0.05, 1, 0.24); /* custom */
  transition-timing-function: cubic-bezier(0.435, 0.05, 1, 0.24);
  position: absolute;
  top: 0;
  @media screen and (max-width: 450px) {
    
    width: 80vw;
    margin-left: ${props =>
      props.active === props.i + 1
        ? "0vw"
        : `${(props.i - props.active) * 94}vw`};
    }};
`

export const GalleryImage = styled(GatsbyImage)`
  width: 90vw;
  aspect-ratio: 3/2;
  @media screen and (max-width: 450px) {
    min-width: 90vw;
  
  }};
`

export const Constrols = styled.div`
  height: 100%;
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 40vw;
  @media screen and (max-width: 450px) {
    display: none;
    }};
`

export const Control = styled.div`
  &:first-of-type {
    margin-bottom: 2rem;
  }
`

export const CaptionsWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 60%;
  @media screen and (max-width: 450px) {
    display: none;
        }};
`

export const ExpandIcon = styled.div`
  margin-left: auto;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 22px;
  height: 22px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  margin-top: 0.5rem;
  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: white;
    transition: transform 0.25s ease-out;
  }

  /* Vertical line */
  &:before {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
  }

  /* horizontal line */
  &:after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    margin-top: -1px;
  }

  &.active {
    &:before {
      transform: rotate(90deg);
    }
    &:after {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 450px) {
    width: 15px;
    height: 15px;
  }
`

const fadeIn = keyframes`
0% {
  opacity: 0;
  display: none;
}
100% { 
  opacity: 1;
  display: block;
}
`
const fadeOut = keyframes`
0% {
  opacity: 1;
  display: block;
  
}
100% { 
  opacity: 0;
  display: none;
}
`

export const TitleWrapper = styled(BC3)`
  position: absolute;
  bottom: 2.75rem;
  left: 0;
  opacity: 0;
  animation: ${props => (props.showCaptions === false ? fadeOut : fadeIn)} 1s
    forwards;
  padding-left: 1rem;
  color: white;
  margin-bottom: 0.5rem;
`
