import React from 'react'
import styled from 'styled-components'
import Body from '../Body'
import Head from '../Head'

const StyledPage = styled.div`
    height: 100vh;
`

const MainPage = () => {
    return (
        <StyledPage>
            <Head/>
            <Body/>
        </StyledPage>
    )
}

export default MainPage