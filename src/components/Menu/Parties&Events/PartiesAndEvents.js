import React from 'react'
import { SectionContainer, SectionWrapper} from "../../StyledComponents/containers.css"
import { Heading1 } from '../../StyledComponents/typography.css'
import PartiesAndEventsGrid from './PartiesAndEventsGrid'

const PartiesAndEvents = ({partiesEvents}) => {
    return (
        <SectionContainer marginTop="lg" marginBottom="lg" >
        <SectionWrapper width="100%">
            <Heading1 marginBottom="sm">
               Parties & Events
            </Heading1>
           
            <PartiesAndEventsGrid partiesEvents={partiesEvents}/>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default PartiesAndEvents
