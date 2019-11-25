import React from 'react'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Device } from '../../styled/Device'


const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    margin-top: 15px;
    padding-top: 10px;
    padding-bottom: 15px;

    p{
        font-size: 16px;
        margin: 0;
    }

    @media ${Device.mobileL}{
        p{
            font-size: 20px
        }
    }
`

const Footer = () => {
    return (
        <FooterDiv>
            <p>This page was made with ReactJS <FaReact style={{color: '#34bdeb', fontSize: '25px'}}/></p>
            <p><MdEmail/> Email Contact: </p>
            <p> JhurgenMrz99@gmail.com </p>
        </FooterDiv>
    )
}

export default Footer
