import { EventDetails } from "./EventDetails"
import React, {useState } from "react"

import ButtonContainer from "./ButtonContainer"
import ContactSection from "./ContactSection"
const EnquireForm = () => {
  const [contactData, setContactData] = useState([])
  const [eventData, setEventData] = useState([])

  const config = {
    //a60601d8-6d64-4e57-a813-425562fb1e1d
    Username: "marekreid@gmail.com",
    Password: "B428DD847DD7367BCEBA368EF0ACE0C93302",
    Host: "smtp.elasticemail.com",
    Port: 2525,
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }

  return (
    <form>
      
      <ButtonContainer title="Submit" />
    </form>
  )
}

export default EnquireForm
