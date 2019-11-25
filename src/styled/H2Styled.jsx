import React from 'react';
import styled from 'styled-components';
import { Device } from './Device'

const StyledH2 =  styled.h2`
    font-family: 'Fjalla One', sans-serif;
    font-size:1.5em;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin: 20px 0 0 25px;
    color: #00204a;

    @media ${Device.mobileM}{
        font-size: 2em;
    }

`;

const H2Styled = ({name}) => <StyledH2>{name}</StyledH2>;

export default H2Styled;