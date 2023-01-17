import React, { useState } from "react"
import { CalendarContainer } from "../DatePicker/Calendar/CalendarContainer"
import { DropDownLabel } from "../DatePicker/DropDownLabel/DropDownLabel"
import { DropDownWrapper, OptionsWrapper } from "../index.css"
import Label from "./Label"

const DropDownContainer = ({
  eventData,
  setEventData,
  isOpen,
  errored,
  setSelectedOption,
  selectedOption,
  setIsOpen,
  field,
}) => {
   
  return (
    <DropDownWrapper isOpen={isOpen} errorFlag={errored} datePicker={true}>
      <Label
        selectedOption={selectedOption}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        field={field}
      />
      <CalendarContainer
        isOpen={isOpen}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        eventData={eventData}
        setEventData={setEventData}
      />
    </DropDownWrapper>
  )
}

export default DropDownContainer
