import React, {useState} from 'react'

const useFormValidation = ({formData}) => {
  console.log('formData', formData)
const [stuff, setErrors] = useState([])
  //   !inputs.fName
  //   ? setError(error => ({ ...error, fName: true }))
  //   : setError(error => ({ ...error, fName: false }))
  // inputs.sName.length === 0
  //   ? setError(error => ({ ...error, sName: true }))
  //   : setError(error => ({ ...error, sName: false }))
  // inputs.email.length === 0 ||
  // !inputs.email.includes(".") ||
  // !inputs.email.includes("@")
  //   ? setError(error => ({ ...error, email: true }))
  //   : setError(error => ({ ...error, email: false }))
  // inputs.number.length === 0
  //   ? setError(error => ({ ...error, number: true }))
  //   : setError(error => ({ ...error, number: false }))
  // inputs.message.length === 0
  //   ? setError(error => ({ ...error, message: true }))
  //   : setError(error => ({ ...error, message: false }))
      
    return stuff
}

export default useFormValidation