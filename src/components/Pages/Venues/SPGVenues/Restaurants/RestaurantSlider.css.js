import styled from "styled-components"

export const Container = styled.div`
  width: 95vw;

  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  margin-bottom: 5rem;
  overflow: hidden;
`

export const ImageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
`

export const Card = styled.div`
  width: 75vw;
  margin-left: ${props =>
    props.active === props.i ? "0vw" : `${(props.i - props.active) * 80}vw`};
  transition: margin-left 550ms ease-out;
  position: absolute;
  top: 0;
  background: white;
`
