import React, { useState, useRef } from "react"

import ButtonContainer from "./ButtonContainer"
import EventDetails from "./EventDetails"
import ContactSection from "./ContactSection"
import useFormValidation from "../../../Common/Hooks/useFormValidation"
import { contactFields } from "./contact-fields"
import { BC1, BC2, Heading1, Heading2, Heading3 } from "../../../StyledComponents/typography.css"
const EnquireForm = () => {
  const form = useRef()
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
    !eventData.natureOfEvent
      ? setErrors(error => ({ ...error, natureOfEvent: true }))
      : setErrors(error => ({ ...error, natureOfEvent: false }))
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
        To: "marekreid@gmail.com",
        From: "enquire@marekreid.com",
        Subject: "New SP Events Webform Submission",
        Body: `<strong>Your package</strong> ${contactData.firstName}, has send a new enquiry. 
        Personal Details:
        First Name: ${contactData.firstName} \n
        Last Name: ${contactData.lastName} \n
        Email: ${contactData.email} \n
        Phone Number: ${contactData.phone} \n
        Company: ${contactData.company}
        Event Details: 
        Nature of Event: ${eventData.natureOfEvent}
        Event Date: ${eventData.date}
        Number of People: ${eventData.numberOfPeople}
        Start Time: ${eventData.startTime}
        End Time: ${eventData.endTime}
        Location: ${eventData.location}
        Menu Style: ${eventData.menuStyple}
        Message: ${eventData.whatAreYouPlanning}
        How Did You Hear About Us: ${eventData.howDidYouHearAboutUs}
        `,
      }

      for (let [field, answer] of Object.entries(eventData)) {
        console.log(field, answer)
      }
     !Object.values(contactData).every(value => !value) && window.Email.send(config).then(
        response => response === "OK" && setEmailSent(true)
      )
    }
  }

  return (
    <>
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
          <ButtonContainer
            title="Submit"
            errors={errors}
            contactData={contactData}
            eventData={eventData}
          />
        </form>
      ) : (
        <div 
        style={{height: form.current && `${form.current.getBoundingClientRect().height}px`}}
        >
          <Heading2>Thank you!</Heading2>
          <BC2>
            Thank you for your enquiry. Our team will
            be in touch as soon as possible.
          </BC2>
        </div>
      )}
    </>
  )
}

export default EnquireForm
