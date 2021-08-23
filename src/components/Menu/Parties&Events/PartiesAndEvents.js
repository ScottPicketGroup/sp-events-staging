import React from 'react'
import { SectionContainer} from "../../StyledComponents/containers.css"
import { Heading1 } from '../../StyledComponents/typography.css'
import PartiesAndEventsGrid from './PartiesAndEventsGrid'

const PartiesAndEvents = () => {
    return (
        <SectionContainer>
           
            <Heading1>
               Parties & Events
            </Heading1>
           
            <PartiesAndEventsGrid/>
        </SectionContainer>
    )
}

export default PartiesAndEvents
