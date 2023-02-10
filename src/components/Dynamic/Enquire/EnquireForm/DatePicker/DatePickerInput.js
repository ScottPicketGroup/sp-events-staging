import React, { useState, useRef } from "react"
import DropDownContainer from "../DropDown/DropDownContainer"
import { FormField } from "../index.css"

import { Label } from "./Label/Label"

const DatePickerInput = ({ field, eventData, errors, setEventData }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [selectedOption, setSelectedOption] = useState()
  const [errored, setErrored] = React.useState(false)
  React.useEffect(() => {
    if (errors)
      for (let [name, isErrored] of Object.entries(errors)) {
        if (name === field.name && isErrored) setErrored(true)
      }
  }, [errors])

  return (
    <FormField full={true} datePicker={true}>
      <Label errored={errored} field={field} />
      <input
        style={{
          display: `none`,
        }}
        type="text"
        name="Event Date"
        value={selectedOption}
        placeholder={field.label}
    
      />
      <DropDownContainer
        eventData={eventData}
        setEventData={setEventData}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        field={field}
      />
    </FormField>
  )
}

export default DatePickerInput
