export const formSubmisionValidation = (formItems, errors, setErrors) => {
console.log('formItems.map(item => item.required', formItems.map(item => item.required))
   formItems.map((item) => item.value === "" && item.required === true ? setErrors(errors => ({ ...errors, [item.name]: true })) 
   : setErrors(errors => ({ ...errors, [item.name]: false }))
   )
  
}