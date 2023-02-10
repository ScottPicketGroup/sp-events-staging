export const contactFormFields = [
  { name: "heading",
    type: "heading",
    value: "Your Contact Information",
    error: true
  },
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    placeHolder: "First Name",
    value:""
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
    placeHolder: "Last Name",
    value:""
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    placeHolder: "Email",
    value:""
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "text",
    required: true,
    placeHolder: "Phone Number",
    value:""
  },
  {
    name: "company",
    label: "Company Name",
    type: "text",
    required: false,
    placeHolder: "Company",
    value:""
  },
  {
    type: "heading",
    value: "Event Details"
  },
  {
    name: "typeOfEvent",
    label: "Type of Event",
    type: "text",
    required: true,
    placeHolder: "Type of Event",
    value: "",
    dropDownOptions: [
      { value: "wedding", label: "Wedding" },
      { value: "party", label: "Party" },
      { value: "Corporate Event", label: "Corporate Event" },
      { value: "Public Event", label: "Public Event" },
    ]
  },
  {
    name: "eventDate",
    label: "Event Date",
    type: "dropDown",
    required: false,
    half: false,
    placeHolder: "Event Date",
    value: ""
  },
  {
    name: "numberOfPeople",
    label: "Number of People",
    type: "text",
    required: true,
    placeHolder: "Number of People",
    value: ""
  },
  {
    name: "startTime",
    label: "Start Time",
    half: true,
    type: "text",
    required: true,
    placeHolder: "Start Time",
    value: "",
  },
  {
    name: "endTime",
    full: false,
    label: "End Time",
    half: true,
    type: "text",
    required: false,
    placeHolder: "End Time",
    value: ""
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    required: false,
    placeHolder: "Please select option(s)",
    value: "",
    dropDownOptions: [
      { value: "Private Residence", label: "Private Residence" },
      {
        value: "Scott Pickett Group Restaurant",
        label: "Scott Pickett Group Restaurant",
      },
      { value: "SP Events Partner venue", label: "SP Events Partner venue" },
      { value: "Other", label: "Other" },
    ]
  },
  {
    name: "menuStyle",
    label: "Menu Style",
    type: "text",
    required: false,
    placeHolder: "Please select option(s)",
    value: "",
    multi: true,
    dropDownOptions: [
      { value: "Canapés", label: "Canapés" },
      { value: "Sit-down meal", label: "Sit-down meal" },
      { value: "Shared-style", label: "Shared-style" },
      { value: "Other", label: "Other" },
    ]
  },
  {
    name: "whatAreYouPlanning",
    label: "What are you planning?",
    type: "textarea",
    full: true,
    required: true,
    placeHolder: "Please tell us what you are envisioning for your event",
    value: ""
  },
  {
    name: "howDidYouHearAboutUs",
    label: "How did you hear about us?",
    type: "text",
    required: false,
    full: true,
    placeHolder: "Please select option",
    value: "",
    dropDownOptions: [
      { value: "Google", label: "Google" },
      { value: "Through a Friend", label: "Through a Friend" },
      {
        value: "Scott Pickett Communications",
        label: "Scott Pickett Communications",
      },
      { value: "Social Media", label: "Social Media" },
      { value: "Other", label: "Other" },
    ]
  },
]
