

const newsLetterSend = (eventData, contactData) => {
    const timestamp = Date.now()
    contactData.email && contactData.newsLetter && contactData.newsletter ?
    console.log('win') : console.log('lose')
  if(contactData.email) {
    if (
      (eventData.newsletter === true &&
        contactData.email &&
        contactData.email.includes(".")) ||
      contactData.email.includes("@")
    ) {
      var myHeaders = new Headers()
      myHeaders.append(
        "Authorization",
        "Bearer 25183d2e-1266-4207-a9d3-a5d9422d94b0"
      )
      myHeaders.append("Timestamp", { timestamp })
      myHeaders.append("Content-Type", "application/json")

      var raw = JSON.stringify({
        data: {
          email: contactData.email,
          tags: ["SP Events Enquiry Form"],
        },
      })

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }

      fetch("https://api.sproutsend.com/contacts?", requestOptions)
        .then(response => response.json())
        .then(result => console.log("result", result))

        .catch(error => console.log("error", error))
    }
  }
}

export default newsLetterSend