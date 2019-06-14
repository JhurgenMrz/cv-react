import React from 'react';
import styled from 'styled-components'

const MainStyled = styled.div`
    display:grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content:center;   
    margin:0; 
`;

const MainContainer = styled.div`
    display:grid;
    grid-template-rows: 445px auto ;
    grid-row-gap: .6em;


    @media only screen and (max-width: 767px){
        grid-template-columns: 1fr;
    }
`;

const Main = ({children}) => (
    <MainStyled>
        <MainContainer>
            {children}
        </MainContainer>

    </MainStyled>
);

export default Main;