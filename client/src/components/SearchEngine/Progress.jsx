/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const ProgressIcon = ({progress}) => {
    let ico
    switch(progress) {
        case "Completed":
            ico = 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                </svg>
            break
        case "In progress":
            ico =
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-dash" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </svg>
            break
        default:
            ico =
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
            </svg>
            break
    }
    return ico
}

const Container = styled.div`
    color: ${
        props => props.progress === "Completed" ? props.theme.color.text.success :
        props => props.progress === "In progress" ? props.theme.color.text.info :
        props.theme.color.text.secondary
    };
    display: flex;
    gap: 0.2rem;
    align-items: center;
    cursor: pointer;
`

const Progress = ({progress, onClick}) => {
    return (
        <Container progress={progress} onClick={onClick}>
            <ProgressIcon progress={progress}/>
            <p>{progress}</p>
        </Container>
    )
}

export default Progress