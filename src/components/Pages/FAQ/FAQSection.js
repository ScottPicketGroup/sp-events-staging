import React from "react"
import { Heading1 } from "../../StyledComponents/typography.css"
import Accordion from "../../Common/Accordion/Accordion"

const FAQSection = ({data}) => {
  const {sectionHeading, faqItems} = data.faqSectionCollection
  console.log('data', data.faqSectionCollection)
  return (
    <>
      <Heading1 marginBottom="md">{sectionHeading}</Heading1>
      {faqItems && faqItems.length > 0 && faqItems.map((item, index) => 
         <Accordion key={index}  title={item.question} subTitle={item.subHeading} answer={item.answer} faq={true} />
      )}   
    </>
  )
}

export default FAQSection
