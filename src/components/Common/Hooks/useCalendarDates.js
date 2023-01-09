import { useEffect, useState } from "react"

const useGetDaysOfMonth = (currentMonth, nextMonth, year) => {
  const [daysToDisplay, setDaysToDisplay] = useState([])
  const date = new Date()
  const todaysDate = date.getDate()
  const day = date.getDay()
  
  const month = date.getMonth()

  let monthtoIt = currentMonth < 12 ? currentMonth - 1 : (currentMonth % 12) - 1

  useEffect(() => {
    let date = new Date(Date.UTC(year, currentMonth, 1))

    const day = { weekday: "long" }
    const dat = { day: "numeric" }
    const mon = { month: '2-digit'}
    const yearF = { year: "numeric"}
    let days = []
    while (date.getUTCMonth() - 1 === monthtoIt) {
      let iterator = date.getDate()
      let m
      if (iterator < 10) {
        days.push({
          dayIndex: date.getDay(),
          day: date.toLocaleDateString("au-EN", day),
          date: "0" + date.toLocaleDateString("au-EN", dat),
          month: "0" + date.toLocaleDateString("au-EN", mon),
          year: date.toLocaleDateString("au-EN", yearF),
        })
      } else {
        days.push({
          dayIndex: date.getDay(),
          day: date.toLocaleDateString("au-EN", day),
          date: date.toLocaleDateString("au-EN", dat),
          month:  date.toLocaleDateString("au-EN", mon),
          year: date.toLocaleDateString("au-EN", yearF),
        })
      }
      date.setUTCDate(date.getUTCDate() + 1)
    }
    const renderDates = () => {
      if (days.length === 0) return
      let daysForDisplay = []
      const startDiff = days[0].dayIndex
      let i = 1
      if(startDiff < 5) {
        while (i < 35) {
          if (i >= startDiff && i <= days.length + startDiff - 1) {
            daysForDisplay.push(days[i - startDiff])
            i++
          } else {
            daysForDisplay.push({
              dayIndex: (i % 7) + 1,
              day: "",
              date: "",
              event: {},
            })
            i++
          }
        } 
      } else {
        while (i < 43) {
          if (i >= startDiff && i <= days.length + startDiff - 1) {
            daysForDisplay.push(days[i - startDiff])
            i++
          } else {
            daysForDisplay.push({
              dayIndex: (i % 7) + 1,
              day: "",
              date: "",
              event: {},
            })
            i++
          }
        } 
      }
    
      
      return daysForDisplay
    }
    const data = renderDates()
    setDaysToDisplay(data)
   
    // eslint-disable-next-line
  }, [currentMonth, nextMonth])

  return { day, year, month, daysToDisplay, date, todaysDate }
}

export default useGetDaysOfMonth
