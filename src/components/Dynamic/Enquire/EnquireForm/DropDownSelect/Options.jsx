import React from "react"
import { BC3 } from "../../../../StyledComponents/typography.css"
import {
    OptionsWrapper,
  } from "../index.css"
export function Options({
    events,
  optionsWrapper,
  height,
  isOpen,
  value,
  changeHandler,
  field,
  i,
  setValue,
}) {
  return (
    <OptionsWrapper
      ref={optionsWrapper}
      style={{
        maxHeight: `${height}`,
      }}
      height={height}
      isOpen={isOpen}
    >
      <input
        style={{
          display: `none`,
        }}
        type="text"
        name={field.label}
        value={value}
        placeholder={field.label}
      />
      {events.dropDownOptions.map((field, i) => (
        <React.Fragment key={i}>
          <BC3
            marginBottom="xs"
            marginTop
            dropDownLabel="true"
            onClick={() => setValue(field.label)}
          >
            {field.label}
          </BC3>
        </React.Fragment>
      ))}
    </OptionsWrapper>
  )
}
