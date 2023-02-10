import React, { useState, useRef } from "react"
import { BC3, Heading3 } from "../../../StyledComponents/typography.css"
import { DropDownArrow } from "./DropDownArrow"
import {
  DropDownLabel,
  DropDownLabelOptionsWrapper,
  DropDownWrapper,
  FormField,
  OptionsWrapper,
} from "./index.css"

const DropDownMulti = ({ field, errors, eventData, setEventData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const [selectedOption, setSelectedOption] = useState("")
  const [errored, setErrored] = React.useState(false)

  React.useEffect(() => {
    // if(errors && errors.hasOwnProperty(field.name) === true) setErrored(true)
    if (errors)
      for (let [name, isErrored] of Object.entries(errors)) {
        if (name === field.name && isErrored) setErrored(true)
      }
  }, [errors])
  const optionsWrapper = useRef(null)

  const toggleSelectOpen = () => {
    setHeight(
      isOpen === true ? "0px" : `${optionsWrapper.current.scrollHeight}px`
    )
    setIsOpen(!isOpen)
  }
  const select = (option, field) => {
    const options = [...selectedOption]
    !options.includes(option) && options.push(option)
    setSelectedOption(options)

    // setSelectedOption(option)

    // setEventData({ ...eventData, [field.name]: selectedOption })
  }

  const removeItem = option => {
    selectedOption.filter(
      (item, index) => item === option && selectedOption.splice(index, 1)
    )
    // setEventData({ ...eventData, [field.name]: selectedOption })
  }

  return (
    <FormField event half={field.half} full={field.full}>
      <Heading3
        marginBottom="xs"
        style={errored ? { color: "red" } : { color: "" }}
      >
        {field.label} {field.required && <span>*</span>}
      </Heading3>
      <input
        style={{
          display: `none`,
        }}
        type="text"
        name={field.label}
        value={selectedOption}
        placeholder={field.label}
      />
      <div>
        <DropDownWrapper isOpen={isOpen} errorFlag={errored}>
          <DropDownLabel onClick={toggleSelectOpen}>
            <DropDownLabelOptionsWrapper>
              {selectedOption.length > 0 ? (
                selectedOption.map((option, i) => (
                  <BC3
                    onClick={() => removeItem(option)}
                    style={
                      errored
                        ? { color: "red" }
                        : selectedOption
                        ? {
                            color: `inherit`,
                            margin: 0,
                            paddingLeft: i > 0 && `.75rem`,
                          }
                        : { color: "#7E7E7E", margin: 0, paddingLeft: `1rem` }
                    }
                  >
                    x {option.charAt(0).toUpperCase() + option.slice(1)}
                  </BC3>
                ))
              ) : (
                <BC3
                marginTop="0"
                marginBottom="0"
                
                  style={
                    errored
                      ? { color: "red", margin: 0 }
                      : selectedOption
                      ? { color: `inherit`, margin: `0px !important` }
                      : { color: "#7E7E7E", margin: 0 }
                  }
                >
                  {field && field.placeHolder} 
                </BC3>
              )}
            </DropDownLabelOptionsWrapper>
            <DropDownArrow isOpen={isOpen} setIsOpen={setIsOpen} />
          </DropDownLabel>
          <OptionsWrapper
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
          </OptionsWrapper>
        </DropDownWrapper>
      </div>
    </FormField>
  )
}

export default DropDownMulti
