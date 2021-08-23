import styled from 'styled-components'

export const PageContainer = styled.div`
width: 100%;
display: flex;
align-items: flex-end;
flex-direction: column;

@media (max-width: 450px) {
    width: 100%;
   
}
`

export const PageWrapper = styled.div`
width: 100%auto;
height: auto;
display: flex;
`


export const SectionContainer = styled.div`
display: flex;
justify-content: flex-end;
flex-direction: column;
margin-top: ${props => props.marginTop ? props.marginTop : ""};
width: ${props => props.width ? props.width : '76%'};
padding: ${props => props.overflow === "true" ? '0 0 0 3.55rem' : props.full ? '0 3.55rem 3.75rem 3.55rem' : '0 3.55rem 0 3.55rem '};
background: ${props => props.background ? props.background : ''};
margin-bottom: ${props => props.marginBottom ? props.marginBottom : "4.25"};
overflow: hidden;
@media (max-width: 450px) {
    width: 100%;
    padding: 0 1rem;
    margin-bottom: 5.9rem;
   background: none;
}
`
export const SectionWrapper = styled.div`
margin-top: 3.75rem;
width: 73.5%;
align-self: flex-end;
@media (max-width: 450px) {
    width: 100%;
    padding: 0;
    margin-top: 0;
}
`

export const MenuContainer = styled.div`
-webkit-flex-direction: column;
-ms-flex-direction: column;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
position: -webkit-sticky;
position: sticky;
height: 100%;
top: 4rem;
left: 4rem;

width: 25%;
` 

export const Grid = styled.div`
width: ${props => props.full ? '100%' : '74.5%'};
align-self: flex-end;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  grid-gap: ${props => props.insta ? props.insta : props.gridGap ? props.gridGap : "3.5rem 1rem"};
  
  align-items: center;
  align-items: start;
  @media (max-width: 451px) {
    grid-template-columns: ${(props) => `repeat(${props.colsMob}, 1fr)`};
    grid-gap: 2rem 0rem;
  }
`;

export const Item = styled.div`

  display: block;
  transition: opacity .2s ease-out;
  
`;

export const ItemImgLink = styled.a`
  text-decoration: none;

  color: #333333;
  &:hover {
    opacity: ${(props) => (props.link ? 0.5 : 1)};
  }
`;
export const ItemImg = styled.div`
  min-height: 250px;
  min-width: 150px;
  background-image: ${(props) => `url('${props.src}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2.25 rem;
  transition: opacity .2s ease-out;
  &:hover {
    opacity: 0.25;
  }
`;


export const FullImageContainer = styled.div`
  display: inline;
  width: 100%;
`;