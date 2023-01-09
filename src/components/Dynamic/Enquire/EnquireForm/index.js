import React, { useState, useRef } from "react"

import ButtonContainer from "./ButtonContainer"
import EventDetails from "./EventDetails"
import ContactSection from "./ContactSection"
import styled from "styled-components"
import CheckBox from "./CheckBox"
import {
  BC2,
  BC3,
  Heading2,
  Heading3,
} from "../../../StyledComponents/typography.css"
import newsLetterSend from "./FormFunctions/NewsLetterSend.js"
import formSend from "./FormFunctions/FormSend"
const EnquireForm = ({ executeScroll, scrollRef }) => {
  const form = useRef()
  const top = useRef()
  const [contactData, setContactData] = useState({})
  const [eventData, setEventData] = useState([])
  const [errors, setErrors] = useState({})
  const [emailSent, setEmailSent] = useState(false)

  const handleSubmit = event => {
    // 👇️ prevent page refresh
    event.preventDefault()

    !contactData.firstName
      ? setErrors(error => ({ ...error, firstName: true }))
      : setErrors(error => ({ ...error, firstName: false }))
    !contactData.lastName
      ? setErrors(error => ({ ...error, lastName: true }))
      : setErrors(error => ({ ...error, lastName: false }))
    !contactData.email || !contactData.email.includes(".")
      ? setErrors(error => ({ ...error, email: true }))
      : setErrors(error => ({ ...error, email: false }))
    !contactData.phone
      ? setErrors(error => ({ ...error, phone: true }))
      : setErrors(error => ({ ...error, phone: false }))
    !eventData.typeOfEvent
      ? setErrors(error => ({ ...error, typeOfEvent: true }))
      : setErrors(error => ({ ...error, typeOfEvent: false }))
    !eventData.startTime
      ? setErrors(error => ({ ...error, startTime: true }))
      : setErrors(error => ({ ...error, startTime: false }))
    !eventData.numberOfPeople
      ? setErrors(error => ({ ...error, numberOfPeople: true }))
      : setErrors(error => ({ ...error, numberOfPeople: false }))
    !eventData.whatAreYouPlanning
      ? setErrors(error => ({ ...error, whatAreYouPlanning: true }))
      : setErrors(error => ({ ...error, whatAreYouPlanning: false }))

    if (
      contactData.firstName &&
      contactData.lastName &&
      contactData.email &&
      contactData.email.includes("@") &&
      contactData.email.includes(".") &&
      eventData.typeOfEvent &&
      eventData.startTime &&
      eventData.numberOfPeople &&
      eventData.whatAreYouPlanning
    ) {
      formSend(
        contactData,
        eventData,
        window.Email,
        emailSent,
        setEmailSent,
        top,
        errors
      )
      newsLetterSend(eventData, contactData)
    }
  }

  return (
    <div ref={top}>
      {!emailSent ? (
        <form onSubmit={handleSubmit} ref={form}>
          <ContactSection
            errors={errors}
            contactData={contactData}
            setContactData={setContactData}
          />
          <EventDetails
            eventData={eventData}
            setEventData={setEventData}
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
