import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import Book from "../../assetts/fonts/fonts/CentraNo2-Book.woff2"
import Light from "../../assetts/fonts/fonts/CentraNo2-Light.woff"
import Medium from "../../assetts/fonts/fonts/CentraNo2-Medium.woff"

export const Typography = createGlobalStyle`
  @font-face {
    font-family: 'CentraNo2Book';
    src: url(${Book});
    font-style: normal;
 
  }
  @font-face {
    font-family: 'CentraNo2Light';
    src: url(${Light}) ;
    format: ("woff");

  }
  @font-face {
    font-family: 'CentraNo2Medium';
    src: url(${Medium}) ;
    format: ("woff");

  }
  @font-face {
    font-family: 'CentraNo2Thin';
    src: url("//db.onlinewebfonts.com/t/67bac7131607122728c4b0b04138d514.woff") ;
    format: ("woff");

  }
`
export const Heading1 = styled.h1`
cursor: ${props => props.link && `pointer`};
  font-family: CentraNo2Book;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -1px;
  transition: color 0.2s ease;
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
    font-size: 1.5rem;
    line-height: 1.17;
    margin-bottom: 1.35rem;
  }
`

export const Heading2 = styled.h2`
  font-family: CentraNo2Light;

  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 900;

  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case props.marginBottom :
      return `${props.marginBottom}rem`
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
      case props.marginTop :
      return `${props.marginTop}rem`
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
    margin-bottom: ${props => {
    switch (props.marginBottom) {
      case props.marginBottom :
      return `${props.marginBottom}rem`
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
      case props.marginTop :
      return `${props.marginTop}rem`
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
    font-size: 1.25rem;
    line-height: 1.2;
  }
`

export const Heading3 = styled.h3`
  font-family: CentraNo2Book;

  font-size: 1rem;
  line-height: 1.25;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".45rem"
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
      case props.marginTop:
        return `${props.marginTop}rem`
      case "xs":
        return ".45rem"
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
    font-family: CentraNo2Book;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`

export const BC1 = styled.p`
  font-family: CentraNo2Light;
  line-height: 1.2;
  font-size: 1.25rem;
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
  }
`

export const BC2 = styled.p`
  font-family: CentraNo2Light;
  line-height: 1.25;
  font-size: 1.25rem;
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
  }
`

export const BC3 = styled.p`
  font-family: CentraNo2Light;
  line-height: 1.25;
  font-size: 1rem;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "0":
        return "0"
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
    font-size: 1rem;
    margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "0":
        return "0"
      case "sm":
        return ".5rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "2.35rem"
    }
  }};
    margin-top: ${props => {
    switch (props.marginTop) {
      case "0":
        return "0"
      case "xs":
        return ".25rem"
      case "sm":
        return ".5rem"
      case "md":
        return "1.5rem"
      case "lg":
        return "3.75rem"
      case "xl":
        return "8rem"
      case "xxl":
        return "100%"
      default:
        return "2.35rem"
    }
  }};
    line-height: 1.15;
  }
`

export const SN1 = styled.p`
  font-family: CentraNo2Medium;
  line-height: 1.25;
  font-size: 1.25rem;
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
    font-size: 1rem;
    margin-bottom: 2.35rem;
    line-height: 1.15;
  }
`
export const SN2 = styled.p`
  font-family: CentraNo2Light;
  line-height: 1.25;
  font-size: 1rem;
  transition: all 0.2s ease;
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
  :hover {
    color: ${props => (props.hover ? "rgba(51, 51, 51, 50%)" : "")};
  }
  @media (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 2.35rem;
    line-height: 1.15;
  }
`
export const IntroHeading = styled(BC1)`
  font-size: 5.6rem;
  color: white;
  font-family: "CentraNo2Light";
`

export const IntroLink = styled(Link)`
  text-decoration: none;
`

export const GridSubHeading = styled(Heading3)`
  font-family: "CentraNo2Light";
`
export const GridLink = styled(Link)`
  text-decoration: none;
`
export const HeroHeading = styled(BC1)`
   font-size: 4rem;
  color: white;
  font-family: "CentraNo2Light";
  @media (min-width: 1050px) {
    font-size: 8rem;
  }
`;