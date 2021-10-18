import styled from "styled-components"

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
`
export const DropdownContainer = styled.div`
  width: 100%;
  min-width: 12em;
  position: absolute;
  display: inline-block;
  min-height: 36px;
  max-height: 36px;
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  color: #444;
  margin-bottom: 16px;
  outline: none;
  border: 0.06em solid black;
  transition: 0.2s all ease-in-out;
  padding: 0 12px;
  z-index: 1;

  input:focus + label {
    background: #def;
  }
  input {
    width: 1px;
    height: 1px;
    display: inline-block;
    position: absolute;
    opacity: 0.01;
  }
  p {
    border-top: 0.06em solid #d9d9d9;
    display: block;
    cursor: pointer;
    position: relative;
    transition: 0.2s color ease-in-out;
    line-height: 36px;

    &:nth-child(2) {
      margin-top: 36px;
      border-top: 0.06em solid #d9d9d9;
    }
  }
  input:checked + p {
    display: block;
    border-top: none;
    position: absolute;
    top: 0;

    &:nth-child(2) {
      margin-top: 0;
      position: relative;
    }
  }

  &::after {
    content: "";
    position: absolute;
    right: 0.8em;
    top: 0.9em;
    border: 0.3em solid black;
    border-color: black transparent transparent transparent;
    transition: 0.2s all ease-in-out;
  }
  &.expanded {
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 5px 0px;
    max-height: 15em;
    z-index: 2;

    p {
      border-top: 0.06em solid #d9d9d9;
    }
  }
`
