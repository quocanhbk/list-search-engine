import React from 'react'
import styled from "styled-components"
import List from './List'
import DisplayContent from './DisplayContent'

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.color.text.secondary};
`

const StaffPerformancePage = () => {
    
    return (
        <Container>
            <List />
            <DisplayContent />
        </Container>
    )
}

export default StaffPerformancePage