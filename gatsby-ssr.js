import * as React from "react"
import Helmet from "react-helmet"
import GlobalStyles from "./src/components/StyledComponents/GlobalStyles.css"
import { Typography } from "./src/components/StyledComponents/typography.css"

const App = ({ element }) => {
  return (
    <>
      <Helmet>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
        <script
          language="javascript"
          src="https://spevents.functiontracker.com/public/v4/enquire.js"
        ></script>
      </Helmet>
      <GlobalStyles />
      <Typography />
      {element}
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return <App element={element} />
}
