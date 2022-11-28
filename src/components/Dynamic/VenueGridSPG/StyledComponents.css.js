import styled from 'styled-components'

export const Container = styled.div`
  
`;

export const SliderContainer = styled.div`
width: 100%;
display: flex;
margin-bottom: 10rem;
overflow: hidden;
top: 100px;
`

export const Slide = styled.div`
position: absolute;
top: 50;
z-index: ${props => props.id};
transition: margin-left .5s ease-in-out;
margin-left: ${props => props.id + props.counter  <= 1 ? "0": `${(props.id - 1 + props.counter)* 155}px`};
`

export const FullImageContainer = styled.div`
  display: inline;
  aspect-ratio: 4/3;
  height: 100%;
  width: 100%;
`;
export const ItemImgLink = styled.a`
  text-decoration: none;

  color: #333333;
  &:hover {
    opacity: ${(props) => (props.link ? 0.5 : 1)};
  }
`;