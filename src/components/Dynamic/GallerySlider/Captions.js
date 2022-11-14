import React from "react"
import { CaptionsWrapper, ExpandIcon, TitleWrapper } from "./GallerySlider.css"

const Captions = ({ title, active, i }) => {
  const [showCaptions, setShowCaptions] = React.useState(false)


  React.useEffect(() => {
      if(active !== i) setShowCaptions(false)
  }, [active])

  function handleOpen() {
    setShowCaptions(!showCaptions)
  }

  return (
    <CaptionsWrapper>
      <ExpandIcon
        onClick={handleOpen}
        className={showCaptions && i === active ? `active` : ``}
      >
      </ExpandIcon>
      <TitleWrapper showCaptions={showCaptions} i={i} active={active}>
        {title}
      </TitleWrapper>
    </CaptionsWrapper>
  )
}

export default Captions
