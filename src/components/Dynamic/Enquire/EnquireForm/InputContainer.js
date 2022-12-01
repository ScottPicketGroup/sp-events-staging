import React from "react"
import { Heading3 } from "../../../StyledComponents/typography.css"

import { InputWrapper } from "./index.css"

const InputContainer = ({ field, errors, inline, data, setData }) => {
  const changeHandler = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const [errored, setErrored] = React.useState(false)

  React.useEffect(() => {
    // if(errors && errors.hasOwnProperty(field.name) === true) setErrored(true)
    if (errors)
      for (let [name, isErrored] of Object.entries(errors)) {
        if (name === field.name && isErrored) setErrored(true)
      }
  }, [errors])

  
 
  return (
    <InputWrapper inline={inline} errorFlag={errored}>
      <Heading3
        style={errored ? { color: "red" } : { color: "" }}
        marginBottom="xs"
      >
        {field.label} {field.required && <span>*</span>}
      </Heading3>
      <input
        type="text"
        placeholder={field.placeHolder}
        name={field.name}
        onChange={changeHandler}
      />
    </InputWrapper>
  )
}

export default InputContainer
