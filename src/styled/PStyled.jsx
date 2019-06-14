import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    font-family: 'Lato';
    color: #3c415e;
    font-weight: 600;
    font-size:1.7em;
    margin: .5em 0 1.2em .6em;
    letter-spacing:1px;
`;

const PStyled = ({name}) => <StyledP>{name}</StyledP>;

export default PStyled;