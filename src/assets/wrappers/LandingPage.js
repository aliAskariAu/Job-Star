import styled from 'styled-components'

const Wrapper = styled.main`
 nav {
    /* margin: 0 3rem; */
    width: 90vw;
    margin: 0 auto;
    height: 9.6rem;
    display: flex;
    align-items: center;

    
 }

 .page{
    /* background-color: lightgray; */
   min-height: calc(100vh - 9.6rem);
   display: grid;
   align-items: center;
   margin-top: -3rem;
 }

 h1 {
    font-weight: 700;
    span {
        color: var(--primary-500);
    }
 }

 p {
    color: var(--grey-600);
 }

 .main-img {
    display: none;
 }

 @media (min-width: 992px) {
    .page {
        grid-template-columns: 1fr 1fr;
        column-gap: 4rem;
    }

    .main-img {
        display: block;
    }
 }

`;

export default Wrapper
