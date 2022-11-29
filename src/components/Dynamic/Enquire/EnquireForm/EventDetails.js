import React from "react"
import { SectionContainer } from "../../../StyledComponents/containers.css"
import { Heading2, Heading3 } from "../../../StyledComponents/typography.css"

import DropDownSelect from "./Dropdown/DropDownSelect"
import { EventFields } from "./event-fields"
import { ContactFormContainer, FormField } from "./index.css"
import InputContainer from "./InputContainer"
import TextAreaContainer from "./TextAreaContainer"
export function EventDetails({ eventData, setEventData }) {
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
{
  /* <FormField>
  <DropDownSelect title="Nature Of Event" />
</FormField>
<FormField>
  <InputContainer title="Event Date" />
</FormField>
<FormField>
  <DropDownSelect title="Number Of People" />
</FormField>
<FormField
  style={{
    display: "flex",
    justifyContent: "space-between",
  }}
>
  <InputContainer title="Start Time" inline />
  <InputContainer title="End Time" inline />
</FormField>
{dropTitles.map((title, index) => (
  <FormField key={index}>
    <DropDownSelect title={title} isMulti />
  </FormField>
))}
<FormField full>
  <TextAreaContainer
    title="What Are You Planning?"
    placeholder="include a massage"
  />
</FormField>
<FormField
  style={{
    marginBottom: "4rem",
  }}
  full
>
  <DropDownSelect title="How Did You Hear About Us?" toUp isMulti />
</FormField> */
}
