import React from "react"
import { Heading3 } from "../../../../../StyledComponents/typography.css"
export function Label({ errored, field }) {
  return (
    <Heading3
      marginBottom="xs"
      style={
        errored
          ? {
              color: "red",
            }
          : {
              color: "",
            }
      }
    >
      {field.label} {field.required && <span>*</span>}
    </Heading3>
  )
}
