import React, { useState, useEffect, useRef } from "react"
import { Heading3 } from "../../StyledComponents/typography.css"
import { BC2 } from "../../StyledComponents/typography.css"
import { DropdownContainer, DropDownWrapper } from "./index.css"

const DropDown = ({ title, placeholder, error }) => {
  const dropdownRef = useRef(null)
  const inputRef = useRef([])
  const [isPlaceholder, setIsPlaceholder] = useState(true)

  const [expanded, setExpanded] = useState(false)
  const options = [
    { value: "option1", label: "Option1" },
    { value: "option2", label: "Option2" },
    { value: "option3", label: "Option3" },
    { value: "option4", label: "Option4" },
  ]

  const handleDropdown = e => {
    e.preventDefault()
    e.stopPropagation()
    setExpanded(!expanded)
  }

  const handleCheck = num => {
    setIsPlaceholder(false)
    inputRef.current.forEach(item => {
      if (item.getAttribute("checked")) item.removeAttribute("checked")
    })
    inputRef.current[num].setAttribute("checked", true)
  }

  useEffect(() => {
    const handleClickOutside = e => {
      setExpanded(false)
    }
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <DropDownWrapper>
      <Heading3
        style={error ? { color: "#CB0000" } : { color: "" }}
        marginBottom="xs"
      >
        {title}
      </Heading3>
      <DropdownContainer
        onClick={handleDropdown}
        className={`dropdown-el ${expanded ? "expanded" : ""}`}
        ref={dropdownRef}
      >
        {isPlaceholder && <BC2 style={{ color: "#7E7E7E" }}>{placeholder}</BC2>}
        {options.map((item, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name={title}
              ref={el => (inputRef.current[index] = el)}
            />
            <BC2 onClick={() => handleCheck(index)}>{item.label}</BC2>
          </React.Fragment>
        ))}
      </DropdownContainer>
    </DropDownWrapper>
  )
}

export default DropDown
