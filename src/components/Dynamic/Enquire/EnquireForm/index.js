import React, { useState, useRef } from "react"

import ButtonContainer from "./ButtonContainer"
import EventDetails from "./EventDetails"
import ContactSection from "./ContactSection"
import styled from 'styled-components';
import CheckBox from "./CheckBox"
import {
  BC2,
  BC3,
  Heading2,
  Heading3,
} from "../../../StyledComponents/typography.css"
import newsLetterSend from "./FormFunctions/NewsLetterSend.js"
const EnquireForm = ({ executeScroll, scrollRef }) => {
  const form = useRef()
  const top = useRef()
  const [contactData, setContactData] = useState({})
  const [eventData, setEventData] = useState([])
  const [errors, setErrors] = useState([])
  const [emailSent, setEmailSent] = useState(false)
  const [formHeight, setFormHeight] = useState()
  const handleSubmit = event => {
    // 👇️ prevent page refresh
    event.preventDefault()

    !contactData.firstName
      ? setErrors(error => ({ ...error, firstName: true }))
      : setErrors(error => ({ ...error, firstName: false }))
    !contactData.lastName
      ? setErrors(error => ({ ...error, lastName: true }))
      : setErrors(error => ({ ...error, lastName: false }))
    !contactData.email
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

    if (window.Email) {
      const config = {
        //a60601d8-6d64-4e57-a813-425562fb1e1d
        Username: "marekreid@gmail.com",
        Password: "B428DD847DD7367BCEBA368EF0ACE0C93302",
        Host: "smtp.elasticemail.com",
        Port: 2525,
        To: "enquiries@spevents.com.au",
        From: "enquiries@spevents.com.au",
        Subject: "New SP Events Webform Submission",
        Body:
          `<strong>${contactData.firstName}, has send a new enquiry.</strong> ` +
          `<br>` +
          `
        Personal Details:  ` +
          `<br>` +
          `
        First Name: ${contactData.firstName} ` +
          `<br>` +
          `
        Last Name: ${contactData.lastName} ` +
          `<br>` +
          `
        Email: ${contactData.email} ` +
          `<br>` +
          `
        Phone Number: ${contactData.phone} ` +
          `<br>` +
          `
        Company: ${contactData.company} ` +
          `<br>` +
          `
        Event Details: ` +
          `<br>` +
          `
        Nature of Event: ${eventData.natureOfEvent} ` +
          `<br>` +
          `
        Event Date: ${eventData.date} ` +
          `<br>` +
          `
        Number of People: ${eventData.numberOfPeople} ` +
          `<br>` +
          ` 
        Start Time: ${eventData.startTime} ` +
          `<br>` +
          `
        End Time: ${eventData.endTime} ` +
          `<br>` +
          `
        Location: ${eventData.location} ` +
          `<br>` +
          `
        Menu Style: ${eventData.menuStyple} ` +
          `<br>` +
          `
        Message: ${eventData.whatAreYouPlanning} ` +
          `<br>` +
          `
        How Did You Hear About Us: ${eventData.howDidYouHearAboutUs} ` +
          `<br>` +
          `
        `,
      }

      // for (let [field, answer] of Object.entries(eventData)) {
      //   console.log(field, answer)
      // }

      //actual submit form code
      //  !Object.values(contactData).every(value => !value) && window.Email.send(config).then(
      //     response => response === "OK" ? setEmailSent(true) : console.log(response)
      //   )
      // scroll to top of form code
      newsLetterSend(eventData, contactData)
    
      top.current.scrollIntoView(-699, { behavior: "smooth" })
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