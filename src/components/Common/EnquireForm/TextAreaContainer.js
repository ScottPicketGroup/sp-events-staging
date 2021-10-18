import React from "react"
import { Heading3 } from "../../StyledComponents/typography.css"

import { TextAreaWrapper } from "./index.css"

const TextAreaContainer = ({ title, placeholder, error }) => {
  return (
    <TextAreaWrapper>
      <Heading3 style={error ? { color: "#CB0000" } : { color: "" }} marginBottom="xs">
        {title}
      </Heading3>
      <textarea placeholder={placeholder} rows={15} />
    </TextAreaWrapper>
  )
}

export default TextAreaContainer
