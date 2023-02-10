import React, { useState, useRef } from "react"
import { BC3, Heading3 } from "../../../StyledComponents/typography.css"
import { DropDownArrow } from "./DropDownArrow"
import { DropDownLabel, DropDownWrapper, FormField, OptionsWrapper } from "./index.css"

const DropDownSelect = ({ field, errors, eventData, setEventData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const [selectedOption, setSelectedOption] = useState()
  const [errored, setErrored] = React.useState(false)

  React.useEffect(() => {
    // if(errors && errors.hasOwnProperty(field.name) === true) setErrored(true)
    if (errors)
      for (let [name, isErrored] of Object.entries(errors)) {
        if (name === field.name && isErrored) setErrored(true)
      }
  }, [errors])
  const optionsWrapper = useRef(null)

  const toggleOpen = () => {
    setHeight(
      isOpen === true ? "0px" : `${optionsWrapper.current.scrollHeight}px`
    )
    setIsOpen(!isOpen)
  }
  const select = (option, field) => {
    setSelectedOption(option)

    setEventData({ ...eventData, [field.name]: option })
  }


  return (
    <FormField event half={field.half} full={field.full}>
    <Heading3 marginBottom="xs" style={errored ? { color: "red" } : { color: "" }}>{field.label} {field.required && <span>*</span>}</Heading3>
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
            {selectedOption
              ? selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)
              : field && field.placeHolder}
          </BC3>
          <DropDownArrow isOpen={isOpen} />
        </DropDownLabel>
    
        {/* <OptionsWrapper
          ref={optionsWrapper}
          style={{ maxHeight: `${height}` }}
          height={height}
          isOpen={isOpen}
        >
          {field &&
            field.dropDownOptions.map((option, i) => (
              <BC3
              marginBottom="xs"
              marginTop
              dropDownLabel="true"
                onClick={() => select(option.value, field)}
              >
                {option.label}
              </BC3>
            ))}
        </OptionsWrapper> */}
      </DropDownWrapper>
    </div>
    </FormField>
    
  )
}

export default DropDownSelect
