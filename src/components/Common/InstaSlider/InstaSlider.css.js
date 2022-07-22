import styled from 'styled-components'

export const SliderContainer = styled.div`
width: 100%;
display: flex;
// justify-content: flex-end;
margin-bottom: 10rem;
overflow: hidden;
top: 100px;
`

export const Slide = styled.div`
position: absolute;
top: 50;
z-index: ${props => props.id};
transition: margin-left .5s ease-in-out;
margin-left: ${props => props.id + props.counter  <= 1 ? "0": `${(props.id - 1 + props.counter)* 195}px`};
height: 180px;
width: 180px;
`