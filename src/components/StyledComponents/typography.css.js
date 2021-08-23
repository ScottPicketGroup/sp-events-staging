import styled, { createGlobalStyle}  from 'styled-components';
import Book from '../../assetts/fonts/fonts/CentraNo2-Book.woff2'
import Light from '../../assetts/fonts/fonts/CentraNo2-Light.woff';


export const Typography = createGlobalStyle`
  @font-face {
    font-family: 'CentraNo2Book';
    src: url(${Book});
    font-style: normal;
 
  }
  @font-face {
    font-family: 'CentraNo2Light';
    src: url(${Light}) ;
    format: ("woff");

  }
  @font-face {
    font-family: 'CentraNo2Thin';
    src: url("//db.onlinewebfonts.com/t/67bac7131607122728c4b0b04138d514.woff") ;
    format: ("woff");

  }
`
export const Heading1 = styled.h1`
font-weight: 900;
font-family: CentraNo2Light;
font-size: 1.8rem;
margin-bottom: 1.25rem;
@media (max-width: 450px) {
    font-size: 1.5rem;
}
`

export const Heading2 = styled.h2`
font-family: CentraNo2Light;
font-size: 1.35rem;
font-weight: 900;
margin-top: .35rem;
margin-bottom: .15rem;
@media (max-width: 450px) {
    font-size: 1.25rem;
    margin-bottom: .25rem;
    
}
`

export const Heading3 = styled.h3`
font-family: CentraNo2Book;

font-size: 1.075rem;
margin-bottom: 1.25rem;
@media (max-width: 450px) {
    font-family: CentraNo2Book;
    font-weight: 100;
    font-size: 1rem;
    margin-bottom: 1rem;
}
`

export const BC1 = styled.p`
font-family: CentraNo2Thin;
font-size: 1.7rem;
@media (max-width: 450px) {
    font-size: 1.25rem;
}
`

export const BC3 = styled.p`
font-family: CentraNo2Thin;
font-weight: 900;
font-size: 1.05rem;
margin-bottom: 1rem;
line-height: 1.25;
@media (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 2.35rem;
    line-height: 1.15;
}
`