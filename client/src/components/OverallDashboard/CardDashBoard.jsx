import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 90%;
    background: #212223;
    box-shadow: 0px 8px 16px rgb(0 0 0 / 32%);
    border-radius: 8px;
    width: 32%;
    color: #575757;
    padding: 2% 1%;
    color: ${props => props.theme.color.text.secondary};
`
const Title = styled.h2`

`

const CardDashBoard = (props) => {
    return (
        <Container {...props}>
            
        </Container>
    )
}
CardDashBoard.Title = Title

export default CardDashBoard