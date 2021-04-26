/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'


const StyledP = styled.p`
    color: ${props => props.theme.color.text.secondary};
    border-left: 1px solid ${props => props.theme.color.border.primary};
    padding-left: 0.3rem;
    margin-left: 0.5rem;
    & b {
        color: ${props => props.theme.color.text.danger};
        margin-left: 0.2rem;
    }
    display: flex;
    align-items: center;
    cursor: pointer;
`

const DueDate = ({dateString, onClick, progress}) => {
    const date = new Date(dateString)
    const today = new Date()
    const isOverdue = today.getTime() > date.getTime() && progress !== "Completed"
    today.setHours(0, 0, 0, 0)
    const genText = () => {
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }
    return (
        <StyledP onClick={onClick}>Due date: {genText()}{isOverdue && <b>(OVERDUE)</b>}</StyledP>
    )
}

export default DueDate