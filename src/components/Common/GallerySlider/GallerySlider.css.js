import styled from 'styled-components';

export const Container = styled.div`

  width: 72vw;
  height: auto;
  display: flex;
 flex-direction: column;
  position: relative;
  height: auto;
  margin-bottom: 5rem;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
margin-top: 2.25rem;
width:  100vw; 
height: 33vw;
position: relative;
display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  z-index: 2;
`

export const Card = styled.div`
height: auto;
width: 75vw;

margin-left: ${props =>
props.active === props.i + 1? '0vw' :
`${(props.i - props.active) * 60 }vw`};
transition: margin-left 550ms ease-in-out;
position: absolute;
top: 0;


`

export const Constrols = styled.div`
  height: 100%;
  width: 10vw;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 40vw;
`;

export const Control = styled.div`
  &:first-of-type {
      margin-bottom: 2rem;
  }
`;