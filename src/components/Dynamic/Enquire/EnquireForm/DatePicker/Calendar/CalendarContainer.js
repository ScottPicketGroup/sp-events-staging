import React, { useRef, useState, useEffect } from "react"
import { OptionsWrapper } from "../../index.css"
import DatePicker from "./DatePicker"
export function CalendarContainer({
  optionsWrapper,
  isOpen,
  selectedOption,
  setSelectedOption,
  eventData,
  setEventData,
}) {


  const [height, setHeight] = useState("0px")

  useEffect(() => {
    isOpen ? setHeight("800px") : setHeight("0px")
  }, [isOpen])
 
  return (
    <OptionsWrapper
      ref={optionsWrapper}
      style={{
        maxHeight: `${height}`,
      }}
      height={height}
      isOpen={isOpen}
    >
      <DatePicker
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        eventData={eventData}
        setEventData={setEventData}
      />
    </OptionsWrapper>
  )
}
