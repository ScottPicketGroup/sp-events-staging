import React from "react"
import { Heading3 } from "../../../StyledComponents/typography.css"

import { InputWrapper } from "./index.css"

const InputContainer = ({
  field,
  error,
  inline,
  data,
  setData,
}) => {
  const changeHandler = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  
  return (
    <InputWrapper inline={inline}>
      <Heading3
        style={error ? { color: "#CB0000" } : { color: "" }}
        marginBottom="xs"
      >
        {field.label}
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
