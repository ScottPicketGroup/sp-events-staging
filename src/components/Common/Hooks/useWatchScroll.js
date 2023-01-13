import { useState, useEffect } from "react"

const useWatchScroll = () => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("down")
  const logit = e => {
    const window = e.currentTarget
    
    if (window.scrollY < scrollY) {
      setScrollY(window.scrollY)
      setScrollDirection("up")
    } else {
      setScrollY(window.scrollY)
      setScrollDirection("down")
    }
  
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  return {scrollDirection, scrollY}
}

export default useWatchScroll
