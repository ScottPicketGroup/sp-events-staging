import styled, {keyframes, css} from 'styled-components'
import { Heading1, Heading2 } from '../StyledComponents/typography.css'
export const SlideOutContainer = styled.div`
height: 100vh;
width: 100vw;
position: absolute;
z-index: 100;
top: 0;
transition: transform .7s ease-in-out;
transform: ${props => props.menuOpen ? "translateX(-85vw)" : "translateX(100vw)" };
background: rgba(0, 0, 0, 80%);

`

export const MenuWrapper = styled.div`
z-index: 200;
width: 58vw;
right: ${props => props.display ? "0vw" : "-58vw" };
transition: transform .7s ease-in-out;
height: 100vh;
float: right;
background: #333333;
display:flex;
flex-direction: column;
padding: 0 3.55rem;

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

export const fade = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: initial;
    opacity: 1;
  }
`

export const EventsSubMenuWrapper = styled.div`
width: 50%;
height: 100vh;
padding-top: 6.75rem;
opacity: ${props => (props.subMenuOpen && props.active === "Events" ? 1 : 0)};
  display: ${props => (props.subMenuOpen && props.active === "Events" ? "initial" : "none ")};
  animation: ${fade} 0.2s linear;
`

export const MenuOpenArrowWrapper = styled.span`
stroke: ${props =>
  props.active === "" ? "white" :
  props.item === props.active ? "white" : 
  props.item !== props.active ? "rgba(255, 255, 255, 50%)" :
  "white"};
`

export const SubMenuWrapper = styled.div`
margin-top: 2rem;
`
export const MenuLogo = styled.div`
svg {
   
    width: 1.7rem;
    @media (max-width: 450px) {
        height: .9rem;
        margin-top: .4rem;
        margin-left: 1rem;
    }
}
`

export const MainMenuItem = styled(Heading1)`

color: ${props =>
  props.active == "" ? "white" :
  props.item === props.active ? "white" : 
  props.item !== props.active ? "rgba(255, 255, 255, 50%)" :
  ""};
`
const SubMenuItemStyles = css`
  color: ${props =>
 props.active == "" ? "white" :
props.item === props.active ? "white" : 
props.item !== props.active ? "rgba(255, 255, 255, 50%)" :
"white"};
`

export const EventsSubMenuItem = styled(Heading2)`
  color: ${props =>
 
props.item === props.active ? "white" : 
props.item !== props.active ? "rgba(255, 255, 255, 50%)" :
"white"};
`

export const SubMenuItem = styled(Heading2)`
${SubMenuItemStyles}
`

export const CloseLogoWrapper = styled.div`
fill: rgba(255, 255, 255, 100%);

svg {
    transition: all .2s ease-in-out;
    :hover {
       fill: rgba(255, 255, 255, 50%);
    }
}
`