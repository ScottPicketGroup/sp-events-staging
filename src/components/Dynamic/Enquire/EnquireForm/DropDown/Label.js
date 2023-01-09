import React from "react"
import { BC3 } from "../../../../StyledComponents/typography.css"
import { DropDownArrow } from "../DropDownArrow"
import { DropDownLabel } from "../index.css"

const Label = ({ errored, selectedOption, setIsOpen, isOpen, field }) => {

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
    <DropDownLabel datePicker={true}>
      <BC3
        onClick={() => setIsOpen(!isOpen)}
        style={
          errored
            ? {
                color: "red",
              }
            : selectedOption
            ? {
                color: `inherit`,
                margin: 0,
              }
            : {
                color: "#7E7E7E",
                margin: 0,
              }
        }
      >
        {selectedOption ? selectedOption : `EventDate`}
      </BC3>

      <DropDownArrow isOpen={isOpen} setIsOpen={setIsOpen} />
    </DropDownLabel>
    </div>
  )
}

export default Label
