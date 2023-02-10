import { Options } from "./Options"
import React, { useState, useRef, useEffect } from "react"
import { BC3, Heading3 } from "../../../../StyledComponents/typography.css"

import { DropDownArrow } from "../DropDownArrow"
import { EventFields } from "../event-fields"
import {
  DropDownLabel,
  DropDownWrapper,
  FormField
} from "../index.css"
const DropDownSelectExt = ({ field, errors, formItems, setFormItems, id }) => {

  const [value, setValue] = React.useState(field.placeHolder)

  const optionsWrapper = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const [selectedOption, setSelectedOption] = useState()
  const [errored, setErrored] = React.useState(false)
  const toggleOpen = () => {
    setHeight(
      isOpen === true ? "0px" : `${optionsWrapper.current.scrollHeight}px`
    )
    setIsOpen(!isOpen)
  }
 
useEffect(() => {

    const updatedFormFieldInput = Object.assign({}, formItems[id])
    updatedFormFieldInput.value = value
    const formItemss = formItems.slice()
    formItemss[id] = updatedFormFieldInput
    setFormItems(formItemss)

}, [value]);
  return (
    <FormField event half={field.half} full={field.full}>
      <Heading3
        marginBottom="xs"
        style={errored ? { color: "red" } : { color: "" }}
      >
        {field.label} {field.required && <span>*</span>}
      </Heading3>
      <div onClick={toggleOpen}>
        <DropDownWrapper isOpen={isOpen} errorFlag={errored}>
          <DropDownLabel>
            <BC3
              style={
                errored
                  ? { color: "red" }
                  : selectedOption
                  ? { color: `inherit`, margin: 0 }
                  : { color: "#7E7E7E", margin: 0 }
              }
            >
              {value
                ? value.charAt(0).toUpperCase() + value.slice(1)
                : field && field.placeHolder}
            </BC3>
            <DropDownArrow isOpen={isOpen} />
          </DropDownLabel>

          <Options
            events={field}
            optionsWrapper={optionsWrapper}
            height={height}
            isOpen={isOpen}
            value={value}
            field={field}
            setValue={setValue}
          />
        </DropDownWrapper>
      </div>
    </FormField>
  )
}

export default DropDownSelectExt
