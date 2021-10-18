import React from "react"
import { Heading2 } from "../../StyledComponents/typography.css"
import { SectionContainer } from "../../StyledComponents/containers.css"

import { ContactFormContainer, FormField } from "./index.css"

import InputContainer from "./InputContainer"
import DropDown from "./DropDown"
import TextAreaContainer from "./TextAreaContainer"
import ButtonContainer from "./ButtonContainer"

const EnquireForm = () => {
  const inputTitles = [
    "First Name",
    "Surname",
    "Email",
    "Phone Number",
    "Company",
  ]
  const dropTitles = [
    "Cuisine",
    "Add-Ons",
    "Sccott Pickett Group Restaurants",
    "I Aleady Know My Event Location",
    "Partner Value",
    "Does Your Venue Have A Kitchen?",
  ]

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <SectionContainer marginBottom="lg">
        <Heading2 marginBottom="md">Your Contact Information</Heading2>
        <ContactFormContainer>
          {inputTitles.map((title, index) => (
            <FormField key={index}>
              <InputContainer title={title} />
            </FormField>
          ))}
        </ContactFormContainer>
      </SectionContainer>
      <SectionContainer marginBottom="xl">
        <Heading2 marginBottom="md">Your Event Details</Heading2>
        <ContactFormContainer>
          <FormField>
            <DropDown
              title="Nature of Event"
              placeholder="Please select an option"
            />
          </FormField>
          <FormField>
            <InputContainer title="Event Date" />
          </FormField>
          <FormField>
            <DropDown
              title="Nature of Event"
              placeholder="Please select an option"
            />
          </FormField>
          <FormField
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <InputContainer title="Start Time" inline />
            <InputContainer title="End Time" inline />
          </FormField>
          {dropTitles.map((title, index) => (
            <FormField key={index}>
              <DropDown title={title} placeholder="Please select an option" />
            </FormField>
          ))}
          <FormField full>
            <TextAreaContainer
              title="What Are You Planning"
              placeholder="include a massage"
            />
          </FormField>
          <FormField full>
            <DropDown
              title="Nature of Event"
              placeholder="Please select an option"
            />
          </FormField>
          <ButtonContainer title="Submit" />
        </ContactFormContainer>
      </SectionContainer>
    </form>
  )
}

export default EnquireForm
