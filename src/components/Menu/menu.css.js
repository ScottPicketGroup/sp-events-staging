import styled, { keyframes, css } from "styled-components"
import { Heading1, Heading2 } from "../StyledComponents/typography.css"

export const fade = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: flex;
    opacity: 1;
  }
`

export const MenuWrapperAnimation = keyframes`
  0% {
    display: none;
    opacity: 0;
   width: 0;
   visibility: hidden;
   
  }
  50% {
    opacity: 0;
   
  }
  100% {
    display: flex;
    opacity: 1;
    width: 58vw;
   visibility: visible;
 
  }
`

export const SlideOutContainer = styled.div`
  height: 100vh;

  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
  transition: width 0.7s ease-in-out;
  width: ${props => (props.menuOpen ? "100vw" : "0%")};
  background: rgba(0, 0, 0, 80%);
`

const menuWrapperAnimation = css`

  animation: ${MenuWrapperAnimation} 0.7s linear;

  padding: 0 3.55rem;
  width: 58vw;
  float: right;
  right: 0;
  background: #333333;
`
const menuWrapper = css`
  opacity: 0;
  display: none;
  visibility: hidden;
`

export const MenuWrapper = styled.div`
  ${props => (props.menuOpen ? menuWrapperAnimation : menuWrapper)};
`

export const MenuHeaderWrapper = styled.div`
  min-height: 8.45rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6rem;
`

export const MenuItemsContainer = styled.div`
  display: flex;
`

export const MainMenuWrapper = styled.div`
  width: 50%;
  height: 100vh;
`

export const EventsSubMenuWrapper = styled.div`
  width: 50%;
  height: 100vh;
  padding-top: 6.75rem;
  opacity: ${props => (props.subMenuOpen && props.active === "Events" ? 1 : 0)};
  display: ${props =>
    props.subMenuOpen && props.active === "Events" ? "initial" : "none "};
  animation: ${fade} 0.2s linear;
`

export const MenuOpenArrowWrapper = styled.span`
  stroke: ${props =>
    props.active === ""
      ? "white"
      : props.item === props.active
      ? "white"
      : props.item !== props.active
      ? "rgba(255, 255, 255, 50%)"
      : "white"};
`

export const SubMenuWrapper = styled.div`
  margin-top: 2rem;
`
export const MenuLogo = styled.div`
  svg {
    width: 1.7rem;
    @media (max-width: 450px) {
      height: 0.9rem;
      margin-top: 0.4rem;
      margin-left: 1rem;
    }
  }
`

export const MainMenuItem = styled(Heading1)`
  color: ${props =>
    props.active == ""
      ? "white"
      : props.item === props.active
      ? "white"
      : props.item !== props.active
      ? "rgba(255, 255, 255, 50%)"
      : ""};
`
const SubMenuItemStyles = css`
  color: ${props =>
    props.active == ""
      ? "white"
      : props.item === props.active
      ? "white"
      : props.item !== props.active
      ? "rgba(255, 255, 255, 50%)"
      : "white"};
`

export const EventsSubMenuItem = styled(Heading2)`
  color: ${props =>
    props.item === props.active
      ? "white"
      : props.item !== props.active
      ? "rgba(255, 255, 255, 50%)"
      : "white"};
`

export const SubMenuItem = styled(Heading2)`
  ${SubMenuItemStyles}
`

export const CloseLogoWrapper = styled.div`
  fill: rgba(255, 255, 255, 100%);

  svg {
    transition: all 0.2s ease-in-out;
    :hover {
      fill: rgba(255, 255, 255, 50%);
    }
  }
`
