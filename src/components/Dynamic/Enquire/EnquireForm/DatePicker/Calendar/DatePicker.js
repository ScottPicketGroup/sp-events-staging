import React, { useState, useRef, useEffect } from "react"
import { Nav } from "./Nav/Nav"
import useGetDaysOfMonth from "../../../../../Common/Hooks/useCalendarDates"

import {
  CalendarContainer,
  CalendarWrapper,
  DateBC3,
  DatePickerContainer,
  DayContainer,
} from "../index.css"

const DatePicker = ({
  eventData,
  setEventData,
  setSelectedOption,
  selectedOption,
}) => {
  const date = new Date()
  const [currentYear, setCurrentYear] = useState(date.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(date.getMonth())
  const [selectedDate, setSelectedDate] = useState()
  const nextMonth = date.getMonth()

  const { daysToDisplay, todaysDate, month } = useGetDaysOfMonth(
    currentMonth,
    nextMonth,
    currentYear
    )

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  const setDate = day => {
    const date1 = new Date(Date.UTC(currentYear, currentMonth, 1))
    const currentMonthName = date1.toLocaleString("default", { month: "long" })
    const dateToSet = "" + day.date + day.month + day.year

    setSelectedDate("" + day.date + day.month + day.year)
    setSelectedOption(day.date + " " + currentMonthName + " " + day.year)

    setEventData({
      ...eventData,
      eventDate: day.date + " " + currentMonthName + " " + day.year,
    })
  }

const dayContainer = useRef()
const dayContainerWidth = dayContainer.current && dayContainer.current.clientWidth

  return (
    <DatePickerContainer>
      <Nav
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      <CalendarWrapper>
      <CalendarContainer>
        {daysOfWeek.map((day, i) => (
          <DayContainer day={day} ref={dayContainer} width={dayContainerWidth} >
            <DateBC3>{day}</DateBC3>
          </DayContainer>
        ))}
        {daysToDisplay.map((day, i) => (
    
            <DayContainer
              key={i}
              selectedDate={selectedDate}
              day={day.date + day.month + day.year}
              onClick={() => setDate(day)}
              width={dayContainerWidth}
            >
              <DateBC3>{day.date}</DateBC3>
            </DayContainer>
          
        ))}
      </CalendarContainer>
      </CalendarWrapper>
    </DatePickerContainer>
  )
}

export default DatePicker
