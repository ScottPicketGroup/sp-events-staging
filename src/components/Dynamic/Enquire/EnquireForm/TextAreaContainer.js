import React, { useEffect } from "react"
import { Heading3 } from "../../../StyledComponents/typography.css"

import { TextAreaWrapper } from "./index.css"

const TextAreaContainer = ({ field, id, errors, formItems, setFormItems }) => {
  const [errored, setErrored] = React.useState(false)
  const [value, setValue] = React.useState("")
  const handleInputChange = e => {
    setValue(e.target.value)
    const updatedFormFieldInput = Object.assign({}, formItems[id])
    updatedFormFieldInput.value = e.target.value
    const formItemss = formItems.slice()
    formItemss[id] = updatedFormFieldInput
    setFormItems(formItemss)
  }
  useEffect(() => {
    const maybe = Object.entries(errors)

    Object.entries(errors).map(item =>
      maybe[id][1] && value === "" ? setErrored(true) : setErrored(false)
    )
  }, [errors])

  return (
    <TextAreaWrapper errorFlag={errored}>
      <Heading3
        style={errored ? { color: "red" } : { color: "" }}
        marginBottom="xs"
      >
        {field.label} {field.required && <span>*</span>}
      </Heading3>
      <textarea
        type="text"
        errorFlag={errored}
        placeholder={field.placeHolder}
        name={field.name}
        rows={15}
        onChange={e => handleInputChange(e)}
      />
    </TextAreaWrapper>
  )
}

export default TextAreaContainer
