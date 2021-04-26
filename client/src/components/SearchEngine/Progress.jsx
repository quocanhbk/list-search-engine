/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const ProgressIcon = ({progress}) => {
    return (
        progress
    )
}

const Container = styled.div``

const Progress = ({progress}) => {
    return (
        <Container progress={progress}>
            <ProgressIcon progress={progress}/>
            <p>{progress}</p>
        </Container>
    )
}

export default Progress