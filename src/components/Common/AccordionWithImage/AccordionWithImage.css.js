import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

/* Style the accordion section */
export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:last-of-type {
    border-bottom: 1px solid #b1b3b6;
  }
 
`

/* Style the buttons that are used to open and close the accordion panel */
export const AccordionBlock = styled.div`
  background-color: #fff;
  cursor: pointer;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
  border-top: 1px solid #b1b3b6;
  @media (max-width: 451px) {
   padding: .5rem 0;
   font-size: 1rem !important;
   > h2 {
    font-size: 1rem !important;
   }
  }
`

/* Style the accordion content panel. Note: hidden by default */
export const AccordionContent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  transition: max-height 0.5s ease;

  @media (max-width: 451px) {
    flex-direction: column;

    .gatsby-image-wrapper {
      width: 100%;
    }
  }
`

export const AccordionIcon = styled.button`
  margin-left: auto;
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  margin-top: 16px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: black;
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
    margin-top: 0;

  }
`

export const AccordionContentText = styled.div`
  width: 65%;

  @media (max-width: 451px) {
    width: 100%;
    order: 1;
  }
`

export const AccordionContentImage = styled.div`
  width: 35%;
  margin-left: 2rem;
  aspect-ratio: 3/4;
  height: 100%;
  .gatsby-image-wrapper {
    width: 100%;
    min-height: 100%;
  }
  @media (max-width: 451px) {
    margin: 0 0 2rem 0;
    width: 100%;
  }
`

export const HeroImage = styled(GatsbyImage)`
  margin-bottom: 4.25rem;
`

export const BorderBottom = styled.div`
  border-bottom: 1px solid #b1b3b6;
  
`
export const AccordionContentTextSection = styled.div`
  margin-bottom: 2rem;
  border-top: 1px solid #b1b3b6;
  @media (max-width: 451px) {
   padding: .5rem 0;
   margin-bottom: 0;
   font-size: 1rem !important;
   > h2, p {
    font-size: 1rem !important;
    margin-bottom: 0;
   }
  }
`
