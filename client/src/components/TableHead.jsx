/* eslint-disable react/jsx-key */
import React from 'react'
import styled from 'styled-components'

export const TableHeadData = [
    {text: "Code", width: "5%", align: "center"},
    {text: "Work Item", width: "38%", align: "left"},
    {text: "Assigned To", width: "15%", align: "center"},
    {text: "Due Date", width: "8%", align: "center"},
    {text: "Is Overdue", width: "8%", align: "center"},
    {text: "Progress", width: "8%", align: "center"},
    {text: "Category", width: "15%", align: "center"},
    {text: "...", width: "3%", align: "center"}
]
const Th = styled.th`
    width: ${props => props.widthh};
    font-weight: 700;
    text-align: ${props => props.textAlign};
    padding: 0.5rem ${props => props.textAlign === "center" ? "0": "0.5rem"};
    border: 1px solid ${props => props.theme.color.border.primary};
    background: ${props => props.theme.color.background.primary};

    position: sticky;
    top: 0px;
    z-index: 1;
`
const Tr = styled.tr`
    background: ${props => props.theme.color.background.secondary};
    border: 1px solid ${props => props.theme.color.border.primary};
`
const THead = styled.thead`
    padding: 0.4rem 0;
`
const TableHead = () => {
    return (
        <THead>
            <Tr>
                {TableHeadData.map(item => 
                    <Th width={item.width} textAlign={item.align}>{item.text}</Th>    
                )}
            </Tr>
        </THead>
    )
}

export default TableHead
