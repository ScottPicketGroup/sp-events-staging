import styled from 'styled-components'

export const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 8.45rem;
width: 100%;
padding: 0 5rem;
@media (max-width: 450px) {
    max-height: 4.87rem;
    padding: 0 1.5rem;
}
`
export const RightWrapper = styled.div`
display: flex;
align-items: center;
width: 16.6%;
justify-content: space-between;
@media (max-width: 450px) {
    min-width: 20%;
}
`

export const LogoContainer = styled.div`

`

export const LogoWrapper = styled.div`
height: 100%;
display: flex;
align-items: center;

svg {
    height: 3.5rem;
}
`
export const DesktopWrapper = styled.div`
@media (max-width: 451px) {
    display: none;
}
`

export const MobileWrapper = styled.div`
@media (min-width: 451px) {
    display: none;
}
`

export const EnquireeWrapper = styled.div`
height: 100%;
display: flex;
align-items: center;

svg {
    height: 3.5rem;
}
@media (max-width: 451px) {
    display: none;
}
`

export const PhoneWrapper = styled.div`
height: 100%;
display: flex;
align-items: center;

svg {
    height: 1.1rem;
}
@media (min-width: 451px) {
    display: none;
}
`