import React from 'react'
import styled from 'styled-components'
import CardDashBoard from './CardDashBoard'

const HeaderDashBoard = styled.div`
    color: #A59C87;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    border-bottom: 1px solid #A59C87;
    padding: 1.5%;
`
const Container = styled.div`
    width: 95%;
    margin: auto;
    height: 100%;
    color: ${props => props.theme.color.text.secondary};
`
const Content = styled.div`
    height: 97%;
    overflow-y: scroll;
    margin-top: 1%;
    display: flex;
    justify-content: space-around;
    color: ${props => props.theme.color.text.secondary};
`

// const data = [1, 2, 3, 4, 5]
const OverallDashboardPage = () => {
    return (
        <Container>
            <HeaderDashBoard>
                Dashboard Overall
            </HeaderDashBoard>
            <Content>
                <CardDashBoard>
                    <CardDashBoard.Title>
                        Test 1
                    </CardDashBoard.Title>
                </CardDashBoard>
                <CardDashBoard />
                <CardDashBoard />
                <CardDashBoard />
                <CardDashBoard />
                <CardDashBoard />
                <CardDashBoard />
            </Content>
        </Container>
    )
}

export default OverallDashboardPage