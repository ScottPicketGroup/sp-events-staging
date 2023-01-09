import styled from "styled-components"
import { BC3 } from "../../../../StyledComponents/typography.css"
export const DatePickerContainer = styled.div`
  background: white;
  z-index: 1000;
  left: 0;
  /* top: 2.5rem; */
`

export const NavContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  /* border-top: #7e7e7e 1px solid;
  border-right: #7e7e7e 1px solid;
  border-left: #7e7e7e 1px solid; */
  @media (max-width: 450px) {
    height: 3rem;
  }
`

export const CalendarContainer = styled.div`
  /* border: #7e7e7e 1px solid; */
  opacity: 1;
  display: grid;
  width: 80%;
  /* padding: 1rem; */
  grid-template-columns: repeat(7, 1fr);
  /* grid-gap: 1rem; */
  padding-bottom: 1rem;
  @media (max-width: 450px) {
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1rem;
    padding-bottom: 1.5rem;
    width: 90%;
  }
`

export const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const DayContainer = styled.div`

  /* border: #7e7e7e .25px solid; */
  display: flex;
  justify-content: center;
  align-content: center;
  background: ${props =>
    props.day === props.selectedDate ? "#7e7e7e" : "white"};
  color: ${props => (props.day === props.selectedDate ? "white" : "#7e7e7e")};
  height: ${props => props.width ? `${props.width  }px` : ``};
  width: ${props => props.width ? `${props.width  }px` : ``};
  transition: 250ms ease;
  border-radius: 50%;
  
  :hover {
    background: ${props => props.day > 0  && `#7e7e7e`};
    color: ${props => props.day > 0  && `white`};
    height: ${props => props.width && `${props.width }px`};
  }
`

export const DateBC3 = styled(BC3)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 450px) {
   margin: 0;
  }
`

export const DirectionContainer = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MonthContainer = styled.div`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
