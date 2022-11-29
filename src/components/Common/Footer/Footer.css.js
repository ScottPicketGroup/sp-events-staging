import styled, { keyframes } from "styled-components"
import {Link} from 'gatsby'
export const FooterWrapper = styled.div`
  width: 100%;
  background: #333333;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
export const FooterItemsWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 2.65rem 6% 0 3%;

@media (max-width: 450px){
  flex-direction: column;
  padding: 2.65rem 1rem 6rem 1rem;
}
`

export const FooterLinksGrid = styled.div`
width: 78%;
padding-bottom: 8.65rem;;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 0 3.5rem;
@media (max-width: 450px){
  padding-bottom: 1.5rem;
  grid-template-columns: repeat(1, 1fr);
}
`

export const FooterLinksColumn = styled.div`
width: 100%;
display: flex;
flex-direction: column;
@media (max-width: 450px){
  margin-bottom: 1.5rem;
}
`

export const FooterLink = styled(Link)`
font-family: CentraNo2Light;
text-decoration: none;
  font-size: 1rem;
  color: white;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return ".75rem"
      case "md":
        return "1.25rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "9.63rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  :hover {
   font-weight: bold;
  }
  @media (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 2.35rem;
    line-height: 1.15;
  }
`

export const FooterItem = styled.p`
font-family: CentraNo2Light;
text-decoration: none;
  font-size: 1rem;
  color: white;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return ".75rem"
      case "md":
        return "1.25rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "9.63rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  /* :hover {
    font-family: bold;
  } */
  @media (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 2.35rem;
    line-height: 1.15;
  }
`

export const SubscribeWrapper = styled.div`
width: 22%;
`

const moveSlideshow = keyframes`
100% { 
  transform: translateX(-2025px);  
}
`

export const FooterExternalLink = styled.a`
text-decoration: none;
font-family: CentraNo2Light;
font-size: 1rem;

  color: white;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "sm":
        return ".75rem"
      case "md":
        return "1.25rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "9.63rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "sm":
        return "1rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "0"
    }
  }};
  :hover {
    font-weight: bold;
  }
  @media (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 2.35rem;
    line-height: 1.15;
  }
`




export const Logos = styled.div`
  display: flex;
  width: 4800px;
  align-items: center;
  height: auto;
  padding: 1.65rem 0;
  border-top: white 1px solid;
  border-bottom: white 1px solid;
  transform: translate3d(0, 0, 0);
  animation-name: ${moveSlideshow};
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  svg,
  path,
  g {
    fill: #f9f9f4;
  }

  /* @media screen and (max-width: 450px) {
    .slick-list {
      width: 1500px;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  } */
  @media (max-width: 450px){
    padding: 20px 0;
  }
`
export const Logo = styled.div`
  fill: #f9f9f4;
  margin-right: 70px;
  svg {
    fill: #f9f9f4;
  }
`
