import React from "react"
import { Heading3 } from "../../../StyledComponents/typography.css"

import { TextAreaWrapper } from "./index.css"

const TextAreaContainer = ({ field, error, data, setData, errors }) => {
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

  console.log('errored', errored)
  return (
    <TextAreaWrapper errorFlag={errored}>
     <Heading3
        style={errored ? { color: "red" } : { color: "" }}
        marginBottom="xs"
      >
        {field.label} {field.required && <span>*</span>}
      </Heading3>
      <textarea  type="text"
        placeholder={field.placeHolder}
        name={field.name}
        onChange={changeHandler} rows={15} />
    </TextAreaWrapper>
  )
}

export default TextAreaContainer
