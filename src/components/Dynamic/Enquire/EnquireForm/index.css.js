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
  width: ${props => (props.full === true ? "100%" : props.half === true ? '24%' :"49%")};
  margin: .5rem 0;
  @media (max-width: 451px) {
    width: 100%;
  }
`

export const TextAreaWrapper = styled.div`
  margin-top: 6px;
  margin-bottom: 16px;
  width: 100%;
  & > textarea::placeholder {
    color:${props => props.errorFlag ? `red` : `#7e7e7e`} ;
  }
  & > textarea {
    border:${props => props.errorFlag ? `red 1px solid` : `#7e7e7e 1px solid`} ;
    color:${props => props.errorFlag ? `red` : `#7e7e7e`} ;
    width: 100%;
    padding: 12px;
    font-family: CentraNo2Light;
    line-height: 1.25;
    font-size: 1.25rem;
    
    color: ${props => props.errorFlag && `red`};
    :focus {
      background: none;
      outline: ${props => props.errorFlag && `red 1px solid`};
    }
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  padding-bottom: 8rem;
  border: none;
  & > .invalid-button {
    all: unset;
  cursor: pointer;
    width: 100%;
    height: 36px;
  cursor: pointer;
    background-color: #cb0000;
    color: #ffffff;
  }

  & > .valid-button {
    all: unset;
  cursor: pointer;
    width: 100%;
    height: 36px;
    background-color: #333333;
    color: #ffffff;
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
  width: ${props => (props.half === true ? '23.5%' : props.inline ? "49%" : "100%")};
  margin-bottom: 1rem;
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
}
input::placeholder {
      color: ${props => props.errorFlag && `red`};
    }
  & > input {
    width: 100%;
    color: ${props => props.errorFlag && `red`};
    padding: .75rem .5rem;
    border:${props => props.errorFlag ? `red 1px solid` : `#7e7e7e 1px solid`} ;
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
  
  border: ${props => props.errorFlag === true ? `red 1px solid` : `#7e7e7e 1px solid`};
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
export const DropDownLabelOptionsWrapper = styled.div`
  display: flex;
  
`;
export const OptionsWrapper = styled.div`
  overflow: hidden;
  background-color: white;
  transition: max-height .5s ease;


  
  :first-child {
    margin-top: 2rem;
  }
`
