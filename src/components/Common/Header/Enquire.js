import { Link } from 'gatsby'
import React from 'react'
import { SN2 } from '../../StyledComponents/typography.css'
import { EnquireeWrapper} from './header.css'

const Enquire = () => {
    return (
        <EnquireeWrapper>
           <SN2 hover> <Link to="/enquiries" style={{textDecoration: 'none'}}>Enquires </Link></SN2>
        </EnquireeWrapper>
    )
}

export default Enquire
