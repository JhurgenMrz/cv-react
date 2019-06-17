import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    font-family: 'Arial',sans-serif;
    color: #3c415e;
    font-weight: 600;
    font-size:1.7em;
    margin: .5em 0 1.2em .6em;
    letter-spacing:1px;
    line-height:130%;

    @media (max-width:426px){
        font-size:1.2em;
        margin:0;
        /* margin-left:7em; */
    }
`;

const PStyled = ({name}) => <StyledP>{name}</StyledP>;

export default PStyled;