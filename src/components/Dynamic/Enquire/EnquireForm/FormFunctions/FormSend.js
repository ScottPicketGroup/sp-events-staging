const formSend = (
  contactData,
  eventData,
  email,
  emailSent,
  setEmailSent,
  top
) => {
  const sentSuccess = response => {
    console.log("respnose", response)
    setEmailSent((emailSent = true))
  }

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


    //   actual submit form code

    email
      .send(config)
      .then(response =>
        response === "OK" ? sentSuccess(response) : console.log(response)
      )
  top.current.scrollIntoView(-699, { behavior: "smooth" })
}

export default formSend
