import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const PageContainer = styled.div`
  width: 76%;
  display: flex;
  align-items: ${props => (props.alignItemStart ? "flex-start" : "flex-end")};
  flex-direction: column;
  padding-bottom: ${props => props.page === 'faqs' && '13.5rem'};
  @media (max-width: 450px) {
    width: 100%;
  }
`

export const PageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`

export const SectionContainer = styled.div`
  display: flex;

  justify-content: flex-end;
  flex-direction: column;
  background: ${props => props.isGreyBackground === true && "#F6F6F6"};
  width: ${props => (props.width ? props.width : "100%")};
  padding: ${props =>
    props.eventTypes
      ? "3.55rem"
      
      : props.fullScreen
      ? "0"
      : " 0 3.5rem "};

  padding-bottom: ${props => {
    switch (props.paddingBottom) {
      case "xs":
        return ".25rem"
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
    padding-top: ${props => {
    switch (props.paddingTop) {
      case "xs":
        return ".25rem"
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
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem"
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
  margin-top: ${props => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem"
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
  overflow: hidden;
  @media (max-width: 450px) {
    margin: 0;
    width: ${props => props.fullMob ? `100%` : `100vw`};
    padding: ${props => props.fullScreenImage ? `0` : props.formTop ? `3rem 0 0 0 ` : props.formBottom ? ` 0 ` :`3rem 1rem`};
    background: ${props => props.isGreyBackground === true && "#F6F6F6"};
  }
`
export const SectionWrapper = styled.div`
  width: ${props => (props.width ? props.width : "70%")};
  align-self: flex-end;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
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
  @media (max-width: 450px) {
    width: 100%;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const RightContainer = styled.div`
  width: 25%;
`
export const IntroWrapper = styled.div`
  /* max-height: ${props =>
    props.isExpanded
      ? `${props.openWrapperHeight + 20}px`
      : `${props.wrapperHeight}px`};
  overflow: hidden; */
  margin-bottom: 1rem;
  transition: max-height 0.5s ease;
  width: ${props => props.introHalfWidth === true && '75%'};
`
export const HeroTextWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
export const MenuContainer = styled.div`
margin-top: 3.5rem;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  height: 100%;
  top: 4rem;
  left: 4rem;
  height: 200px;
  width: 25%;
  @media (max-width: 450px) {
    display: none;
  }
`
export const MenuItem = styled.p`
  cursor: pointer;
  transition: all 1s ease;
  font-family: ${props =>
    props.activeEl === props.menuItem
      ? "CentraNo2Medium"
      : "CentraNo2Light"};
  a {
    text-decoration: none;
    margin-left: 1.25rem;
    font-family: "CentraNo2Light";
  }
  :first-child {
    font-family: ${props =>
      props.scrolly < props.sh ? "CentraNo2Medium" : ".1rem"};
  }
`
export const Grid = styled.div`
  width: ${props => (props.full ? "100%" : "74.5%")};
  align-self: flex-end;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  grid-gap: ${props =>
    props.insta ? props.insta : props.gridGap ? props.gridGap : "2.75rem 2rem"};

  align-items: center;
  align-items: start;
  @media (max-width: 451px) {
    grid-template-columns: repeat(1, 1fr);
    /* grid-template-columns: ${props => `repeat(${props.colsMob}, 1fr)`}; */
    grid-gap: 3rem 0rem;
  }
`

export const Item = styled.div`
  display: block;
  min-height: 10vh;
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
`

export const ItemImgLink = styled.a`
  text-decoration: none;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;
  color: #333333;
  &:hover {
    opacity: ${props => (props.link ? 0.65 : 1)};
  }
`
export const GatsbyItemImgLink = styled(Link)`
 text-decoration: none;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;
  color: #333333;
  &:hover {
    opacity: ${props => (props.link ? 0.65 : 1)};
  }
`

export const ItemImgGatsbyLink = styled(Link)`
  text-decoration: none;

  color: #333333;
  &:hover {
    opacity: ${props => (props.link ? 0.5 : 1)};
  }
`

export const ItemImg = styled.div`
  min-height: 250px;
  min-width: 150px;
  background-image: ${props => `url('${props.src}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2.25 rem;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 0.25;
  }
`

export const FullImageContainer = styled.div`
  display: inline;
  width: 100%;
  margin-bottom: 4rem;
  @media (max-width: 451px) {
    margin-bottom: 1rem;
  }
`

export const DesktopWrapper = styled.div`
  @media (max-width: 451px) {
    display: none;
  }
`

export const MobileWrapper = styled.div`
  display: ${props => (props.imageControls ? " flex" : "")};
  width: ${props => (props.imageControls ? " 100%" : "")};
  justify-content: ${props => (props.imageControls ? " space-between" : "")};
  @media (min-width: 451px) {
    display: none;
  }
`

export const HeroContainer = styled.div`
  position: relative;
`
