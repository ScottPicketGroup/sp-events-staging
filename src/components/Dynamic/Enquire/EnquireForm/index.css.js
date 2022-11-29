import { keyframes, css } from "styled-components"
import styled from "styled-components"

export const toDownFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10rem);
    height: 1rem;
  }
  50% {
    opacity: 0;
    transform: translateY(-4rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    height: 100px;
  }
`

export const toUpFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }
  50% {
    opacity: 0;
    transform: translateY(4rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const FormField = styled.div`
  width: ${props => (props.full ? "100%" : props.half === true ? '24%' :"49%")};
  margin: .5rem 0;
  @media (max-width: 451px) {
    width: 100%;
  }
`

export const TextAreaWrapper = styled.div`
  margin-top: 6px;
  margin-bottom: 16px;
  width: 100%;
  & > textarea {
    width: 100%;
    padding: 12px;
    font-family: CentraNo2Light;
    line-height: 1.25;
    font-size: 1.25rem;
    border: #7e7e7e 1px solid;
    :focus {
      background: none;
      outline: none;
    }
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  padding-bottom: 8rem;
  & > .invalid-button {
    width: 100%;
    height: 36px;
    background-color: #cb0000;
    color: #ffffff;
  }

  & > .valid-button {
    width: 100%;
    height: 36px;
    background-color: #333333;
    color: #ffffff;
  }

  & > .valid-button:hover {
    background-color: #ffffff;
    color: #333333;
  }
`

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 451px) {
    flex-direction: column;
  }
`

export const InputWrapper = styled.div`
  width: ${props => (props.inline ? "49%" : "100%")};
  margin-bottom: 1rem;
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
}
  & > input {
    width: 100%;
    
    padding: .75rem .5rem;
    border: #7e7e7e 1px solid;
    :focus {
      background: none;
      outline: none;
    }
    
  }
`
const open = css`
  animation: ${toDownFadeIn} 0.5s ease-in-out;
`
const close = css`
  animation: ${toUpFadeIn} 0.5s ease-in-out;
`
export const DropDownWrapper = styled.div`
cursor: pointer;
  position: relative;
  border: #7e7e7e 1px solid;
  width: 100%;
  margin-bottom: 1rem;
  padding: .5rem;
  animation: ${props => (props.isOpen === true ? open : close)};
`
export const DropDownLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;


  
`
export const OptionsWrapper = styled.div`
  overflow: hidden;
  background-color: white;
  transition: max-height .5s ease;


  
  :first-child {
    margin-top: 2rem;
  }
`
