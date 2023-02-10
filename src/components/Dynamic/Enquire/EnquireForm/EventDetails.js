import React from "react"
import { SectionContainer } from "../../../StyledComponents/containers.css"
import { Heading2 } from "../../../StyledComponents/typography.css"
import DatePickerInput from "./DatePicker/DatePickerInput"

import DropDownMulti from "./DropDownMulti"
import DropDownSelect from "./DropDownSelect"
import DropDownSelectExt from "./DropDownSelect/DropDownSelectExt"
import { EventFields } from "./event-fields"
import { ContactFormContainer, FormField } from "./index.css"
import InputContainer from "./InputContainer"
import TextAreaContainer from "./TextAreaContainer"
const EventDetails = ({
  contactData,
  setContactData,
  errors,
  formItems,
  setFormItems,
}) => {
  return (
    <SectionContainer marginBottom="md" fullScreen fullMob formBottom>
      <ContactFormContainer>
        {formItems &&
          formItems.map((field, i) => (
            <>
              {field.type === "heading" ? (
                <FormField event full={true}>
                  <Heading2 marginBottom="1">Your Event Details</Heading2>
                </FormField>
              ) : field.type === "dropDown" ? (
                <FormField event full={field.full}>
                  <DatePickerInput errors={errors} field={field} />
                </FormField>
              ) : field.type === "textarea" ? (
                <FormField event full={field.full}>
                  <TextAreaContainer
                    errors={errors}
                    field={field}
                    formItems={formItems}
                    setFormItems={setFormItems}
                    id={i}
                  />
                </FormField>
              ) : field.dropDownOptions && field.multi === true ? (
                <DropDownMulti
                  errors={errors}
                  field={field}
                  formItems={formItems}
                  setFormItems={setFormItems}
                  id={i}
                />
              ) : field.dropDownOptions ? (
                <DropDownSelectExt
                  errors={errors}
                  field={field}
                  formItems={formItems}
                  setFormItems={setFormItems}
                  id={i}
                />
              ) : (
                <FormField event full={field.full} half={field.half}>
                  <InputContainer
                    errors={errors}
                    field={field}
                    formItems={formItems}
                    setFormItems={setFormItems}
                    id={i}
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
