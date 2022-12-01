import React from "react"
import { Heading3 } from "../../../StyledComponents/typography.css"
import { ButtonWrapper } from "./index.css"

const ButtonContainer = ({ title, error, eventData, contactData }) => {
  
const submit = (e) => {
  
  console.log('formData', eventData, contactData)
}

  return (
    <ButtonWrapper>
      <button
        type="submit"
        className={error ? "invalid-button" : "valid-button"}
        onClick={() => submit}
      >
        <Heading3>{title}</Heading3>
      </button>
    </ButtonWrapper>
  )
}

export default ButtonContainer
