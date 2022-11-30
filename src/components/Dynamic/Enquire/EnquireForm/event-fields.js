export const EventFields = [
    {
      name: "typeOfEvent",
      label: "Type Of Event",
      type: "text",
      required: false,
      placeHolder: "Type Of Event",
      value:"",
      dropDownOptions: [
        { value: "wedding", label: "Wedding" },
        { value: "party", label: "Party" },
        { value: "corporateEvent", label: "Corporate Event" },
        { value: "publicEvent", label: "Public Event" },
      ]
    },
    {
        name: "eventDate",
        label: "Event Date",
        type: "text",
        required: false,
        placeHolder: "Event Date",
        value: "",
      },
    {
      name: "numberOfPeople",
      label: "Number of People",
      type: "text",
      required: false,
      placeHolder: "Number of People",
      value:"",
      dropDownOptions: [
        
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
      ]
    },
    {
        name: "startTime",
        label: "Start Time",
        half: true,
        type: "text",
        required: false,
        placeHolder: "Start Time",
        value: "",
        dropDownOptions: [
            
            { value: "18:00", label: "18:00" },
            { value: "19:00", label: "19:00" },
            { value: "20:00", label: "20:00" }, 
          ]
      },
      {
        name: "endTime",
        label: "End Time",
        half: true,
        type: "text",
        required: false,
        placeHolder: "End Time",
        value: "",
        dropDownOptions: [
            
            { value: "22:00", label: "22:00" },
            { value: "23:00", label: "23:00" },
            { value: "00:00", label: "00:00" },
          ]
      },
    {
      name: "location",
      label: "Location",
      type: "text",
      required: false,
      placeHolder: "Please select option(s)",
      value:"",
      dropDownOptions: [
          
          { value: "Smith Street Bistro", label: "Smith Street Bistro" },
          { value: "Longsong", label: "Longsong" },
          { value: "Chancery Lane", label: "Chancery Lane" },
        ]
    },
    {
        name: "menuStyle",
        label: "Menu Style",
        type: "text",
        required: false,
        placeHolder: "Please select option(s)",
        value:"",
        dropDownOptions: [
          { value: "wedding", label: "Wedding" },
          { value: "wedding", label: "Wedding" },
          { value: "wedding", label: "Wedding" },
          { value: "wedding", label: "Wedding" },
        ]
      },
      {
          name: "plans",
          label: "What are you planning?",
          type: "textarea",
          required: false,
          placeHolder: "Please tell us what you are envisioning for your event",
          value:"",
          
        },
        {
            name: "howDidYouHearAboutUs",
            label: "How did you hear about us?",
            type: "text",
            required: false,
            full: true,
            placeHolder: "Please select option",
            value:"",
            dropDownOptions: [
              { value: "wedding", label: "Wedding" },
              { value: "wedding", label: "Wedding" },
              { value: "wedding", label: "Wedding" },
              { value: "wedding", label: "Wedding" },
            ]
          },
    ]
  