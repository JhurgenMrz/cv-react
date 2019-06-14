import React from 'react';
import styled from 'styled-components';

const StyledH2 =  styled.h2`
    font-family: 'Fjalla One', sans-serif;
    font-size:2em;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin: .3em 0 0.6em 0.6em;
    color: #00204a;


`;

const H2Styled = ({name}) => <StyledH2>{name}</StyledH2>;

export default H2Styled;