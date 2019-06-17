import React from 'react';
import styled from 'styled-components';

const StyledH2 =  styled.h2`
    font-family: 'Fjalla One', 'Arial' sans-serif;
    font-size:2em;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin: .3em 0 0.6em 0.6em;
    color: #00204a;

    @media (max-width:768px){
        font-size:1.5em;
    }
    @media (max-width:426px){
        font-size:1.5em;
        margin:0;
        ${'' /* margin-left:6em  */}
    }

`;

const H2Styled = ({name}) => <StyledH2>{name}</StyledH2>;

export default H2Styled;