import React, {useState, useEffect} from 'react'

const useWatchScroll = () => {
    const [scrollY, setScrollY] = useState(0)

    const logit = () => setScrollY(window.pageYOffset)

    useEffect(() => {
      const watchScroll = () => {
        window.addEventListener("scroll", logit)
      }
      watchScroll()
      return () => {
        window.removeEventListener("scroll", logit)
      }
    })


    return scrollY
}

export default useWatchScroll
