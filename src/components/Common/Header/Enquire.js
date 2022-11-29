import { Link } from 'gatsby'
import React from 'react'
import { SN2 } from '../../StyledComponents/typography.css'
import { EnquireeWrapper} from './header.css'
import { useLocation } from '@reach/router';
const Enquire = () => {
    const location = useLocation().pathname
    return (
        <EnquireeWrapper>
           <SN2 hover> <Link to="/enquiries" style={{textDecoration: 'none'}}>
            Talk To Us
            
             </Link></SN2>
        </EnquireeWrapper>
    )
}

export default Enquire
