import { keyframes } from "styled-components"
import styled from "styled-components"

export const toDownFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10rem);
  }
  50% {
    opacity: 0;
    transform: translateY(-4rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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
  width: ${props => (props.full ? "100%" : "49%")};

  @media (max-width: 451px) {
    width: 100%;
  }
`

export const TextAreaWrapper = styled.div`
  margin-top: 6px;
  margin-bottom: 16px;

  & > textarea {
    width: 100%;
    padding: 12px;
    font-family: CentraNo2Light;
    line-height: 1.25;
    font-size: 1.25rem;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;

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

  & > input {
    width: 100%;
    height: 36px;
    padding: 8px;
  }
`
export const DropDownWrapper = styled.div`
  position: relative;
  min-height: 80px;

  // .menu-down {
  //   animation: ${toDownFadeIn} 0.5s ease-in-out;
  // }
  // .menu-up {
  //   animation: ${toUpFadeIn} 0.5s ease-in-out;
  // }
`