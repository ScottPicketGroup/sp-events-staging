import React, { useState, useRef, useEffect } from "react"
import { useForm, ValidationError } from "@formspree/react"
import ButtonContainer from "./ButtonContainer"
import EventDetails from "./EventDetails"
import ContactSection from "./ContactSection"
import styled from "styled-components"
import { contactFormFields } from "./contact-fields"
import { EventFields } from "./event-fields"
import CheckBox from "./CheckBox"
import {
  BC2,
  BC3,
  Heading2,
  Heading3,
} from "../../../StyledComponents/typography.css"
import newsLetterSend from "./FormFunctions/NewsLetterSend.js"
import formSend from "./FormFunctions/FormSend"
import { formSubmisionValidation } from "../FormLogic/formSubmitValidation"
const EnquireForm = ({ executeScroll, scrollRef }) => {
  const form = useRef()
  const top = useRef()
  const [contactData, setContactData] = useState({})
  const [eventData, setEventData] = useState([])
  const [formItems, setFormItems] = useState(contactFormFields)
  const [errors, setErrors] = useState({})
  const [emailSent, setEmailSent] = useState(false)
  const [state, handleSubmit] = useForm("mnqypvaq")

//   const handleFormSubmit = (e, handleSubmit) => {
//     // 👇️ prevent page refresh
// e.preventDefault()
//     formSubmisionValidation(formItems, errors, setErrors)

//     handleSubmit()
//     if (!Object.values(errors).includes(true)) {
//       newsLetterSend(eventData, contactData)
//     }
//   }
//   console.log("state", state)
  return (
    <div ref={top}>
      {!state.succeeded ? (
       <form onSubmit={handleSubmit}>
         
          
            <EventDetails
              formItems={formItems}
              setFormItems={setFormItems}
              eventData={eventData}
              setEventData={setEventData}
              contactData={contactData}
              setContactData={setContactData}
              errors={errors}
            />
          

          <TixboxContainer>
            <div
              onClick={() =>
                setEventData(eventData => ({ ...eventData, newsletter: true }))
              }
            >
              <CheckBox />
            </div>
            <Label bc2 style={{ width: `90%` }}>
              I would like to receive communications about Scott Pickett Group
              services, events and matters of relevant interest.
            </Label>
          </TixboxContainer>

          {Object.values(errors).includes(true) && (
            <BC3
              style={{
                color: `red`,
                textAlign: `center`,
                marginBottom: `1rem`,
              }}
            >
              Please complete required fields
            </BC3>
          )}
          <ButtonContainer
            title="Submit"
            errors={errors}
            contactData={contactData}
            eventData={eventData}
            formItems={formItems} setErrors={setErrors}
            handleSubmit={handleSubmit}
          />
        </form>
      ) : (
        <div
          style={{
            height:
              form.current &&
              `${form.current.getBoundingClientRect().height}px`,
          }}
        >
          <Heading2>Thank you!</Heading2>
          <BC2>
            Thank you for your enquiry. Our team will be in touch as soon as
            possible.
          </BC2>
        </div>
      )}
    </div>
  )
}

export default EnquireForm
export const TixboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.25rem;
  margin-bottom: 1.75rem;
`
export const Label = styled(BC3)`
  font-size: ${props => (props.thankyou ? "1.5rem" : `1.25rem`)};
  @media screen and (max-width: 450px) {
    font-size: ${props => (props.thankyou ? "1rem" : `1.25rem`)};
  }
`
