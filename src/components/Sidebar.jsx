import React from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.div`
    /* border: 2px solid white; */
    margin:0;
    padding:0;
`;

const Sidebar =({children})=> (
    <SidebarContainer>
            {children}
    </SidebarContainer>
);

export default Sidebar;