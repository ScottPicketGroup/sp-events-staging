import React from "react"
import { Heading3 } from "../../../StyledComponents/typography.css"
import { ButtonWrapper } from "./index.css"

const ButtonContainer = ({ title, errors, eventData, contactData }) => {
  
  const [errored, setErrored] = React.useState(false)

  React.useEffect(() => {
    // if(errors && errors.hasOwnProperty(field.name) === true) setErrored(true)
    if(Object.values(errors).includes(true))  setErrored(true)
  }, [errors])
console.log('errors', errors)
  return (
    <ButtonWrapper>
      <button
        type="submit"
        className={errored === true ? "invalid-button" : "valid-button"}
       
      >
        <Heading3 marginTop="0"
        style={{
          margin: 0,
          textAlign: `center`
        }}
        >{title}</Heading3>
      </button>
    </ButtonWrapper>
  )
}

export default ButtonContainer
