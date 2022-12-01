import React, { useState, useRef, useForwardRef } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import InputContainer from "./InputContainer";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerInput = ({field, date, errors, setContactData, contactData}) => {
  const [startDate, setStartDate] = useState(new Date());
  const ref = React.createRef();
  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    
      <InputContainer field={field} setData={setContactData} data={contactData} errors={errors}>{value}</InputContainer>
  ));
  return (
    <DatePicker
    selected={startDate} onChange={(date) => setStartDate(date)} 
    customInput={<ExampleCustomInput ref={ref}/>}
    //only when value has changed
/>
  );
  
};
export default DatePickerInput