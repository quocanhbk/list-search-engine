import React from 'react'
import styled from 'styled-components'
import sampleData from '../sampleData'

const StyledTr = styled.tr`
    &:hover {
        background: ${props => !props.footer && props.theme.color.background.secondary};
    }
    transition: all 150ms ease-in;

`

const StyledTd = styled.td`
    text-align: ${props => props.textAlign};
    padding: 0.5rem ${props => props.textAlign === "center" ? "0": "0.5rem"};
    font-size: 0.95rem;
    border: 1px solid ${props => props.theme.color.border.primary};
`
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Chevron = () => {
    return (
        <StyledDiv>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </StyledDiv>
    )
}
const StyledTBody = styled.tbody`
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 0.6rem;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.color.fill.secondary};
        border-radius: 99px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.color.fill.primary};
    }
`
const TableBody = () => {
    return (
        <StyledTBody>
            {sampleData.map(item => 
                <StyledTr>
                    <StyledTd textAlign="center">{item.code}</StyledTd>
                    <StyledTd>{item.workItem}</StyledTd>
                    <StyledTd textAlign="center">{item.assignedTo}</StyledTd>
                    <StyledTd textAlign="center">{item.duedate}</StyledTd>
                    <StyledTd textAlign="center">{item.isOverdue}</StyledTd>
                    <StyledTd textAlign="center">{item.progress}</StyledTd>
                    <StyledTd>{item.category}</StyledTd>
                    <StyledTd textAlign="center"><Chevron/></StyledTd>
                </StyledTr>    
            )}
        </StyledTBody>
    )
}

export default TableBody
