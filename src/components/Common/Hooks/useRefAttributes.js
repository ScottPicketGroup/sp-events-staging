import { useState, useEffect } from "react"

const useRefAttributes = itemsRef => {
  const [items, setItems] = useState([])
  const [heights, setHeights] = useState([])

  useEffect(() => {
    //  set top position of each element
    let itemsToPush = []
    itemsRef &&
      itemsRef.current.forEach(i => {
        const meh = i.getBoundingClientRect()

        itemsToPush.push(meh.top)
        setItems(itemsToPush)
      })
    //set heights for each element
    const heightsToPush = []
    itemsRef &&
      itemsRef.current.forEach(i => {
        const scrollTop = i.scrollHeight

        heightsToPush.push(scrollTop)
        setHeights(heightsToPush)
      })
    itemsRef.current = itemsRef.current.slice(0, items.length)
  }, [])

  return { items, heights }
}

export default useRefAttributes
