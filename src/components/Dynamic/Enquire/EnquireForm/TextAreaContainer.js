import React from "react"
import { Heading3 } from "../../../StyledComponents/typography.css"

import { TextAreaWrapper } from "./index.css"

const TextAreaContainer = ({ field, error, data, setData }) => {
  const changeHandler = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  return (
    <TextAreaWrapper>
      <Heading3 style={error ? { color: "#CB0000" } : { color: "" }} marginBottom="xs">
        {field.title}
      </Heading3>
      <textarea  type="text"
        placeholder={field.placeHolder}
        name={field.name}
        onChange={changeHandler} rows={15} />
    </TextAreaWrapper>
  )
}

export default TextAreaContainer
