import React from 'react';
import styled from 'styled-components';
import SidebarContent from './SidebarContent';

const Container = styled.div`
    height: 100%;
`;
function ContentTimeLine() {
    return (
        <Container>
            <SidebarContent />
        </Container>
    );
}

export default ContentTimeLine;