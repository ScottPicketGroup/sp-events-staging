import React from "react"
import { SectionContainer } from "../../../StyledComponents/containers.css"
import { Heading2, Heading3 } from "../../../StyledComponents/typography.css"

import DropDownSelect from "./Dropdown/DropDownSelect"
import { EventFields } from "./event-fields"
import { ContactFormContainer, FormField } from "./index.css"
import InputContainer from "./InputContainer"
import TextAreaContainer from "./TextAreaContainer"
export default function EventDetails({ eventData, setEventData }) {
  return (
    <SectionContainer marginBottom="md" fullScreen fullMob>
      <Heading2 marginBottom="1">Your Event Details</Heading2>
      <ContactFormContainer>
        {EventFields.map((field, i) => (
          <>
            {field.type === "textarea" ? (
              <FormField full event>
                <Heading3 marginBottom="xs">{field.label}</Heading3>
                <TextAreaContainer
                  field={field}
                  data={eventData}
                  setData={setEventData}
                />
              </FormField>
            ) : field.dropDownOptions ? (
              <FormField event half={field.half} full={field.full}>
                <Heading3 marginBottom="xs">{field.label}</Heading3>
                <DropDownSelect
                  field={field}
                  eventData={eventData}
                  setEventData={setEventData}
                />
              </FormField>
            ) : (
              <FormField event full={field.full}>
                <InputContainer
                  field={field}
                  setData={setEventData}
                  data={eventData}
                />
              </FormField>
            )}
          </>
        ))}
      </ContactFormContainer>
    </SectionContainer>
  )
}
