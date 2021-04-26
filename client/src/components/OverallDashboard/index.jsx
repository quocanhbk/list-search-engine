import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.color.text.secondary};
`

const OverallDashboardPage = () => {
    return (
        <Container>
            Overall Dashboard Page
        </Container>
    )
}

export default OverallDashboardPage