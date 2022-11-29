import React, { useState, useRef } from "react"
import { BC3 } from "../../../../StyledComponents/typography.css"
import { DropDownArrow } from "./DropDownArrow"
import { DropDownLabel, DropDownWrapper, OptionsWrapper } from "../index.css"

const DropDownSelect = ({ field, error, eventData, setEventData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const [selectedOption, setSelectedOption] = useState()

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

  console.log("eventData", eventData)
  return (
    <div onClick={toggleOpen}>
      <DropDownWrapper isOpen={isOpen}>
        <DropDownLabel>
          <BC3
            style={
              error
                ? { color: "#CB0000" }
                : selectedOption
                ? { color: `inherit` }
                : { color: "#7E7E7E", margin: 0 }
            }
           
          >
            {selectedOption
              ? selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)
              : field && field.placeHolder}
          </BC3>
          <DropDownArrow isOpen={isOpen} />
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
                onClick={() => select(option.value, field)}
              >
                {option.label}
              </BC3>
            ))}
        </OptionsWrapper>
      </DropDownWrapper>
    </div>
  )
}

export default DropDownSelect
