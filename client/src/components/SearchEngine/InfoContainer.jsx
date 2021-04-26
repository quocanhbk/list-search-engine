/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const HeadlineContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    color: ${props => props.theme.color.fill.primary};
`
const Headline = styled.p``
const Body = styled.div`
    background: ${props => props.theme.color.background.primary};
    border: 1px solid ${props => props.theme.color.border.primary};
    //box-shadow: ${props => props.theme.shadow};
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-top: 0.4rem;
`

const InfoContainer = ({icon, headline, children}) => {
    return (
        <Container>
            <HeadlineContainer>
                {icon}
                <Headline>{headline}</Headline>
            </HeadlineContainer>
            
            <Body>{children}</Body>
        </Container>
    )
}

export default InfoContainer