import React, { useEffect } from "react"
import { SectionContainer } from "../../../StyledComponents/containers.css"
import { Heading2 } from "../../../StyledComponents/typography.css"
import { contactFields } from "./contact-fields"
import { ContactFormContainer, FormField } from "./index.css"
import InputContainer from "./InputContainer"

export default function ContactSection({
  contactData,
  setContactData,
  errors
}) {
  return (
    <SectionContainer marginBottom="md" fullScreen paddingTop="lg" fullMob>
      <Heading2 marginBottom="1">Your Contact Information</Heading2>
      <ContactFormContainer>
        {
          contactFields.map((field, i) => (
            <>
              <FormField key={i}>
                <InputContainer field={field} setData={setContactData} data={contactData} errors={errors}/>
              </FormField>
            </>
          ))}
      </ContactFormContainer>
    </SectionContainer>
  )
}
