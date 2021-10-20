import React, { useState } from "react"


import { BC2 } from "../../../../StyledComponents/typography.css"
import { Input, Label, SignUp, SignUpSubmit, SubContainer } from "./Subscribe.css"

const SubscribeForm = () => {
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState(false)
  const [signUp, setSignup] = useState(true)

  const handleChange = event => {
    setEmail(event.target.value)
    !email.includes(".") || !email.includes("@")
      ? setEmailErr(true)
      : setEmailErr(false)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const timestamp = Date.now()
    if ((email && email.includes(".")) || email.includes("@")) {
      let myHeaders = new Headers()
      myHeaders.append(
        "Authorization",
        "Bearer 25183d2e-1266-4207-a9d3-a5d9422d94b0"
      )
      myHeaders.append("Timestamp", {timestamp})
      myHeaders.append("Content-Type", "application/json")

      let raw = JSON.stringify({
        data: {
          email: email,
        },
      })

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }

      fetch("https://api.sproutsend.com/contacts?", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .then(setSignup(false))

        .catch(error => console.log("error", error))
    } else {
      setEmailErr(true)
    }
  }

  return (
    <SubContainer>
      {signUp ? (
        <SignUp onSubmit={handleSubmit}>
          <Label err={emailErr}>EMAIL ADDRESS</Label>
          <form>
            <Input
              placeholder="Please enter your email address"
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
              err={emailErr}
            />
           
            <SignUpSubmit err={emailErr} type="submit">
              SUBSCRIBE
            </SignUpSubmit>
          </form>
        </SignUp>
      ) : (
        <>
          <BC2>Thank you</BC2>
          <BC2>You are now signed up to our mailing list.</BC2>
        </>
      )}
    </SubContainer>
  )
}

export default SubscribeForm

