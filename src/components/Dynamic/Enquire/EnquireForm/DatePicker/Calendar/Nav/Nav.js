import React from "react"
import { ArrowIconBack } from "../ArrowIconBack"
import { ArrowIconForward } from "../ArrowIconForward"
import { DirectionContainer, MonthContainer, NavContainer } from "../../index.css"
export function Nav({
  currentYear,
  setCurrentYear,
  currentMonth,
  setCurrentMonth,
}) {
  const todaysDate = new Date()
  const date = new Date(Date.UTC(currentYear, currentMonth, 1))
  const currentMonthName = date.toLocaleString("default", { month: "long" })
  const currentMonthYear =
    currentMonth < 10
      ? currentYear + "0" + currentMonth
      : "" + currentYear + currentMonth
  const todaysMonthYear =
    todaysDate.getMonth() < 10
      ? todaysDate.getFullYear() + "0" + todaysDate.getMonth()
      : "" + todaysDate.getFullYear() + todaysDate.getMonth()

  const back = () => {
    if (currentMonthYear > todaysMonthYear) {
      if (currentMonth === 0) {
        setCurrentYear(currentYear - 1)
        setCurrentMonth(11)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    }
  }
  const forward = () => {
    if (currentMonth < 11) {
      setCurrentMonth(currentMonth => currentMonth + 1)
    } else if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    }
  }

  return (
    <NavContainer>
      <DirectionContainer>
        <div onClick={back}>
          <ArrowIconBack />
        </div>
      </DirectionContainer>
      <MonthContainer>
        {currentMonthName} {currentYear}
      </MonthContainer>
      <DirectionContainer>
      <div onClick={forward}>
        <ArrowIconForward />
      </div>
      </DirectionContainer>
    </NavContainer>
  )
}
