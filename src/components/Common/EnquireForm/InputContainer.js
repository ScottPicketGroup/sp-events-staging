import React from "react"
import { Heading3 } from "../../StyledComponents/typography.css"

import { InputWrapper } from "./index.css"

const InputContainer = ({ title, placeholder, error, inline }) => {
  return (
    <InputWrapper inline={inline}>
      <Heading3
        style={error ? { color: "#CB0000" } : { color: "" }}
        marginBottom="xs"
      >
        {title}
      </Heading3>
      <input type="text" placeholder={placeholder} />
    </InputWrapper>
  )
}

export default InputContainer
