import React from 'react';
import styled from 'styled-components'

const MainStyled = styled.div`
    display:grid;
    grid-template-columns: minmax(auto, 1024px);
    grid-template-rows: 440px auto ;
    justify-content:center;   
    grid-row-gap: .3em;
    margin:0; 

    @media only screen and (max-width: 767px){
        grid-template-columns: 1fr;
    }

        `;


const Main = ({children}) => (
    <MainStyled>
            {children}
    </MainStyled>
);

export default Main;