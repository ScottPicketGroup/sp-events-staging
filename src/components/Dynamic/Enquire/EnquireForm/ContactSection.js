import React, { useEffect } from "react"
import { SectionContainer } from "../../../StyledComponents/containers.css"
import { Heading2 } from "../../../StyledComponents/typography.css"
import { contactFields } from "./contact-fields"
import { ContactFormContainer, FormField } from "./index.css"
import InputContainer from "./InputContainer"

export default function ContactSection({
  state,
  contactData,
  setContactData,
  errors,
  setErrors
}) {
  return (
    <SectionContainer marginBottom="md" fullScreen paddingTop="lg" fullMob formTop>
      <Heading2 marginBottom="1">Your Contact Information</Heading2>
      <ContactFormContainer>
        {
          contactFields.map((field, i) => (
            <>
              <FormField key={i}>
                <InputContainer field={field} setData={setContactData} data={contactData} setErrors={setErrors} errors={errors} state={state}/>
              </FormField>
            </>
          ))}
      </ContactFormContainer>
    </SectionContainer>
  )
}
