import styled from "styled-components";

export const Grid = styled.div`
width: 100%;
align-self: flex-end;
  display: grid;
  grid-template-columns: ${(props) => `repeat(6, 1fr)`};
  /* grid-gap: ${(props) => (props.theme.name === "Desktop" ? "3.5rem 0rem" : "3.5rem 0")}; */
  grid-gap: 3.5rem .5rem;
  align-items: center;
  align-items: start;
`;

export const Item = styled.div`

  display: block;
  transition: opacity .2s ease-out;
  
`;

export const ItemImgLink = styled.a`
  text-decoration: none;

  color: #333333;
  &:hover {
    opacity: ${(props) => (props.link ? 0.5 : 1)};
  }
`;
export const ItemImg = styled.div`
  min-height: 250px;
  min-width: 150px;
  background-image: ${(props) => `url('${props.src}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2.25 rem;
  transition: opacity .2s ease-out;
  &:hover {
    opacity: 0.25;
  }
`;


export const FullImageContainer = styled.div`
  display: inline;
  width: 100%;
`;