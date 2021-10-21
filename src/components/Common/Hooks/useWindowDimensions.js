import { useState, useEffect } from 'react';



export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

 

  useEffect(() => {
    const isBrowser = typeof window !== "undefined"
   if (!isBrowser) {
     return 
   } 

   function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
   

    
  }, []);

  return windowDimensions;
}