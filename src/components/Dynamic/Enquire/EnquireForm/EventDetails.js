import React from "react"
import { SectionContainer } from "../../../StyledComponents/containers.css"
import { Heading2, Heading3 } from "../../../StyledComponents/typography.css"
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
            {field.type === "textarea" ? (
              <FormField event full={field.full}>
                
                <TextAreaContainer
                  errors={errors}
                  field={field}
                  data={eventData}
                  setData={setEventData}
                />
              </FormField>
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
