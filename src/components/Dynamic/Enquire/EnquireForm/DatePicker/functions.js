export const toggleOpen = (isOpen, setIsOpen, ref) => {
    
    if (isOpen === false) {
   
      setIsOpen(true)
    }
  }

  export const toggleClose = (isOpen, setIsOpen) => {
    if (isOpen === false) return
    if (isOpen === true) {
     
      setIsOpen(false)
    }
  }