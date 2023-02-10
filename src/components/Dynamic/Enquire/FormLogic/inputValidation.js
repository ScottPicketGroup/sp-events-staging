export const inputValidation = (event, formItems, setFormItems, field, id) => {

  //update field value in form items object
  const updatedFormFieldInput = Object.assign({}, formItems[id])
  updatedFormFieldInput.value = event.target.value
  const formItemss = formItems.slice()
  formItemss[id] = updatedFormFieldInput
  setFormItems(formItemss)


  //check entry has 2 or more characters in it and only letters
  if (
    field.required === true &&
    event.target.value.length > 1
    
  ) {
    const updatedFormField = Object.assign({}, formItems[id])
    updatedFormField.error = false
    const formItemss = formItems.slice()
    formItemss[id] = updatedFormField
   
  } else if (event.target.value.length > 1) {
    const updatedFormField = Object.assign({}, formItems[id])
    updatedFormField.error = true
    const formItemss = formItems.slice()
    formItemss[id] = updatedFormField
  }
   
  // for phone ensure only digits and less than 10 characters
  
  if (
    field.name === "phone" &&
    
    /^(?=.*)((?:\+61) ?(?:\((?=.*\)))?([2-47-8])\)?|(?:\((?=.*\)))?([0-1][2-47-8])\)?) ?-?(?=.*)((\d{1} ?-?\d{3}$)|(00 ?-?\d{4} ?-?\d{4}$)|( ?-?\d{4} ?-?\d{4}$)|(\d{2} ?-?\d{3} ?-?\d{3}$))/.test(event.target.value) === true &&  
    field.required === true 
    
    ) {
      console.log('it is')
      const updatedFormField = Object.assign({}, formItems[id])
      updatedFormField.error = false
      const formItemss = formItems.slice()
      formItemss[id] = updatedFormField
      setFormItems(formItemss)
    }

// if number of people is only numbers and greather than 1 and less than 10000
if (
    field.name === "numberOfPeople" &&
    /^[0-9]/.test(event.target.value) === true &&
    event.target.value > 1 && event.target.value < 10000 &&
    field.required === true &&
    event.target.value > 2
  ) {
    const updatedFormField = Object.assign({}, formItems[id])
    updatedFormField.error = false
    const formItemss = formItems.slice()
    formItemss[id] = updatedFormField
    setFormItems(formItemss)
  } 
// check email
if (
    field.name === "email" &&
    /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(event.target.value) === true &&
    field.required === true 
    
  ) {
    const updatedFormField = Object.assign({}, formItems[id])
    updatedFormField.error = false
    const formItemss = formItems.slice()
    formItemss[id] = updatedFormField
    setFormItems(formItemss)
  }

}


