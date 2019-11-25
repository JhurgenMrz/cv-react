import styled, { keyframes} from 'styled-components'

const rotate = keyframes`
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg)
    }
`

const animate = keyframes`
    0%,100%{
        stroke-dashoffset: 440
    }
    50%{
        stroke-dashoffset: 0
    }
    50.1%{
        stroke-dashoffset: 880
    }
`
export const Svg = styled.svg`
    position: relative;
    width: 150px;
    height: 150px;
    animation: ${rotate} 2s linear infinite


    circle{
        width: 100%;
        height: 100%;
        fill: none;
        stroke-width: 10;
        /* stroke: #00a1ff; */
        stroke: #fff;
        stroke-linecap: round;
        transform: translate(5px, 5px);
        stroke-dasharray: 440;
        stroke-dashoffset: 440;
        animation: ${animate} 4s linear infinite;
    }

`
