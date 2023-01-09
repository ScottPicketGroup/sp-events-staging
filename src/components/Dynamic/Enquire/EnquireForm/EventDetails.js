import React from "react"
import { SectionContainer } from "../../../StyledComponents/containers.css"
import { Heading2 } from "../../../StyledComponents/typography.css"
import DatePickerInput from "./DatePicker/DatePickerInput"

import DropDownMulti from "./DropDownMulti"
import DropDownSelect from "./DropDownSelect"
import { EventFields } from "./event-fields"
import { ContactFormContainer, FormField } from "./index.css"
import InputContainer from "./InputContainer"
import TextAreaContainer from "./TextAreaContainer"
const EventDetails = ({ eventData, setEventData, errors }) => {
  return (
    <SectionContainer marginBottom="md" fullScreen fullMob formBottom>
      <Heading2 marginBottom="1">Your Event Details</Heading2>
      <ContactFormContainer>
    
        {EventFields.map((field, i) => (
          <>
            {field.type === "dropDown" ? (
              <FormField event full={field.full}>
                <DatePickerInput
                  errors={errors}
                  field={field}
                  eventData={eventData}
                  setEventData={setEventData}
                />
              </FormField>
            ) : field.type === "textarea" ? (
              <FormField event full={field.full}>
                <TextAreaContainer
                  errors={errors}
                  field={field}
                  data={eventData}
                  setData={setEventData}
                />
              </FormField>
            ) : field.dropDownOptions && field.multi === true ? (
              <DropDownMulti
                errors={errors}
                field={field}
                eventData={eventData}
                setEventData={setEventData}
              />
            ) : field.dropDownOptions ? (
              <DropDownSelect
                errors={errors}
                field={field}
                eventData={eventData}
                setEventData={setEventData}
              />
            ) : (
              <FormField event full={field.full} half={field.half}>
                <InputContainer
                  errors={errors}
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
export default EventDetails
