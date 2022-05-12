import * as React from 'react'
import GlobalStyles from './src/components/StyledComponents/GlobalStyles.css'
import { Typography } from './src/components/StyledComponents/typography.css';

const App = ({element}) => {
    return (
        <>
            <GlobalStyles />
            <Typography />
            {element}
        </>
    )
}

export const wrapRootElement = ({ element }) => {
    return <App element={element} />
}