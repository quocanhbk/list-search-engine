import React from 'react'
import styled from 'styled-components'
import Display from './Display'
import Toolbar from './Toolbar'

const StyledBody = styled.div`
    height: 100%;
`

const Body = () => {
    return (
        <StyledBody>
            <Toolbar/>
            <Display/>
        </StyledBody>
    )
}

export default Body