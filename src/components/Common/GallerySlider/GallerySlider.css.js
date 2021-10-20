import styled from 'styled-components'

export const SliderContainer = styled.div`
width: 100%;
display: flex;
margin-bottom: 10rem;
overflow: hidden;

`

export const Slide = styled.div`

top: 50;
z-index: ${props => props.id};
transition: margin-left .5s ease-in-out;
margin-left: 0;
`
//margin-left: ${props => props.id + props.counter  <= 1 ? "0": `${(props.id - 1 + props.counter)* 155}px`};