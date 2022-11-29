import styled from 'styled-components'

/* Style the accordion section */
export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:last-of-type {
    margin-bottom: -1rem;
    border-bottom: 1px solid #b1b3b6;
  }
`

/* Style the buttons that are used to open and close the accordion panel */
export const AccordionBlock = styled.div`
  background-color: #fff;
  cursor: pointer;
  padding: 0 0 1rem 0px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
  border-top: 1px solid #b1b3b6;
`

/* Style the accordion content panel. Note: hidden by default */
export const AccordionContent = styled.div`
  background-color: white;
  transition: max-height 0.5s ease;
  width: ${props => props.faq === true ? '75%' : ''};
`

export const AccordionIcon = styled.button`
  margin-left: auto;
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  margin-top: 16px;
  &:before,
  &:after{
      content: "";
      position: absolute;
      background-color: black;
      transition: transform 0.25s ease-out;
  }

  /* Vertical line */
  &:before{
      top: 0;
      left: 50%;
      width: 2px;
      height: 100%;
      margin-left: -1px;
  }

  /* horizontal line */
  &:after{
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      margin-top: -1px;
  }

  &.active {    
    &:before{ transform: rotate(90deg); }
    &:after{ transform: rotate(180deg); }
  }

  @media (max-width: 450px) {
    width: 15px;
    height: 15px;
  }
`