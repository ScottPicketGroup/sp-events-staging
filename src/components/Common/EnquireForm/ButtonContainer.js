import React from "react"
import { Heading3 } from "../../StyledComponents/typography.css"
import { ButtonWrapper } from "./index.css"

const ButtonContainer = ({ title, error }) => {
  return (
    <ButtonWrapper>
      <button
        type="submit"
        className={error ? "invalid-button" : "valid-button"}
      >
        <Heading3>{title}</Heading3>
      </button>
    </ButtonWrapper>
  )
}

export default ButtonContainer
