import React from 'react';
import styled from 'styled-components'

const MainStyled = styled.div`
    display:grid;
    grid-template-columns: minmax(auto, 1024px);
    grid-template-rows: 440px auto auto ;
    justify-content:center;   
    grid-row-gap: .3em;
    margin:0; 

    @media only screen and (max-width:1024px) {
        grid-template-columns: 1023px;
        grid-template-rows: auto auto auto ;
        
    }

    @media only screen and (max-width: 768px){
        grid-template-columns: auto;
    }
    @media only screen and (max-width: 426px){
        grid-template-columns: 425px;
        background-color: white;
    }
    @media only screen and (max-width: 376px){

        grid-template-columns: minmax(auto, 375px);
        background-color: grey;
        grid-row-gap: 2em;
        grid-template-rows:auto auto auto;

    }


    `;


const Main = ({children}) => (
    <MainStyled>
            {children}
    </MainStyled>
);

export default Main;