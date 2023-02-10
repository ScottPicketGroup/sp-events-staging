import React, { useEffect } from "react"
import { Heading3 } from "../../../StyledComponents/typography.css"
import { inputValidation } from "../FormLogic/inputValidation"

import { InputWrapper } from "./index.css"

const InputContainer = ({
  field,
  id,
  formItems,
  setFormItems,
  errors,
  inline,
}) => {
  const changeHandler = (
    event,
    formItems,
    setFormItems,
    field,
    id,
  ) => {
    //  setErrors({ ...errors, [event.target.name]: event.target.value })
    inputValidation(event, formItems, setFormItems, field, id)
  }

  const [errored, setErrored] = React.useState(false)

  useEffect(() => {
    const maybe = Object.entries(errors)

    Object.entries(errors).map(item =>
      maybe[id][1] ? setErrored(true) : setErrored(false)
    )
  }, [errors])

  return (
    <>
      {field.name === "email" ? (
        <InputWrapper inline={inline} errorFlag={errored}>
          <Heading3
            style={errored ? { color: "red" } : { color: "" }}
            marginBottom="xs"
          >
            {field.label} {field.required && <span>*</span>}
          </Heading3>
          <input
            type="email"
            placeholder={field.placeHolder}
            name={field.placeHolder}
            onChange={event =>
              changeHandler(event, formItems, setFormItems, field, id)
            }
          />
        </InputWrapper>
      ) : field.name === "phone" ? (
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
            name={field.placeHolder}
            onChange={event =>
              changeHandler(event, formItems, setFormItems, field, id)
            }
          />
        </InputWrapper>
      ) : field.name === "firstName" || field.name === "lastName" ? (
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
            name={field.placeHolder}
            onChange={event =>
              changeHandler(event, formItems, setFormItems, field, id)
            }
          />
        </InputWrapper>
      ) : field.name === "startTime" ? (
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
            name={field.placeHolder}
            onChange={event =>
              changeHandler(event, formItems, setFormItems, field, id)
            }
          />
        </InputWrapper>
      ) : (
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
            name={field.placeHolder}
            onChange={event =>
              changeHandler(event, formItems, setFormItems, field, id)
            }
          />
        </InputWrapper>
      )}
    </>
  )
}

export default InputContainer
