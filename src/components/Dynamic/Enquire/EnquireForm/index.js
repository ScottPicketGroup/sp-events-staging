import React, { useState, useEffect } from "react"

import ButtonContainer from "./ButtonContainer"
import EventDetails from "./EventDetails"
import ContactSection from "./ContactSection"
import useFormValidation from "../../../Common/Hooks/useFormValidation"
import { contactFields } from "./contact-fields"
const EnquireForm = () => {
  const [contactData, setContactData] = useState({})
  const [eventData, setEventData] = useState([])
  const [errors, setErrors] = useState([])





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

if(window.Email) {
  const config = {
    //a60601d8-6d64-4e57-a813-425562fb1e1d
    Username: "marekreid@gmail.com",
    Password: "B428DD847DD7367BCEBA368EF0ACE0C93302",
    Host: "smtp.elasticemail.com",
    Port: 2525,
    To: "marekreid@gmail.com",
    From: "enquire@marekreid.com",
    Subject: "This is the subject",
    Body: `
    ${eventData} and stuff
    `,
  }

for(let [field, answer] of Object.entries(eventData)) {
    console(field, answer)
  }
  window.Email.send(config).then(response =>console.log(response))
}
  }

  return (
    <form onSubmit={handleSubmit}>
      <ContactSection
        errors={errors}
        contactData={contactData}
        setContactData={setContactData}
      />
      <EventDetails eventData={eventData} setEventData={setEventData} errors={errors}/>
      <ButtonContainer
        title="Submit"
        errors={errors}
        contactData={contactData}
        eventData={eventData}
      />
    </form>
  )
}

export default EnquireForm
