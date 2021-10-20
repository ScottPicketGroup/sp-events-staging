import styled from 'styled-components'
import { BC3 } from "../../../../StyledComponents/typography.css"

export const SubscribeWrapper = styled.div `
width: 28%;
display: flex;
flex-direction: column;

@media screen and (max-width: 450px) {
      width: 100%;
    }
`


export const SubContainer = styled.div`
  width: 100%;

  overflow: visible;
  margin-top: 1rem;
  p {
    font-size: 1rem;
  }
`

export const SignUp = styled.div`
  font-size: 0.75rem;
`
export const Label = styled(BC3)`
  color: ${props => (props.err ? "#CB0000" : "white")};

`
export const Input = styled.input`
  width: 95%;
  height: 2rem;
  background: transparent;
  border: none;
 
  font-size: 0.75rem;
  line-height: none;
  border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "white")};
  ::placeholder {
    
    font-size: 1rem;
    margin-bottom: 10rem;
    color: ${props => props.err ? '#CB0000' : '#6A6A6A'};
    @media screen and (max-width: 450px) {
      font-size: 1rem;
    }
  }
  :focus {
    outline: none;
    background: transperant;
   color: white;
    height: 2.25rem;
    font-size: 150%;
  }
  :valid {
    font-size: 1rem;
    color: white;
  }
  ::-moz-focus-outer {
    color: white;
  }
  @media screen and (max-width: 450px) {
    height: 2.25rem;   
  }
`

export const SignUpSubmit = styled.button`
  background: none;

  padding: 0.5rem 2rem;
  border: 1px solid ${props => (props.err ? "#CB0000" : "white")};
  color: ${props => (props.err ? "#CB0000" : "white")};
  margin-top: 1.75rem;
  font-size: 120%;
  transition: all 0.2s ease;
  :hover {
    opacity: ${props => (props.err ? "1" : ".75")};
    background: ${props => props.err ? "#CB0000" : "white"};
    color: ${props => (props.err ? "beige" : "#2B3C31")}; 
  }
  @media screen and (max-width: 450px) {
    font-size: 0.75rem !important;
    padding: 0.5rem 1.6rem;
  }
  p {
    font-family: tTNormsPro;
  }
`
