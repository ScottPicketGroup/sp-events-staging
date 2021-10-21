import { useState, useEffect } from 'react';



export default function useWindowDimensions() {
  
  const isSSR = typeof window !== "undefined"

  const [windowDimensions, setWindowDimensions] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800: window.innerHeight
  });

useEffect(() => {
  window.addEventListner("resize", () => {
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight})
  })
  return () => {
    window.removeEventListner("resize", () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight})
    })
  }
})

  return windowDimensions;
}