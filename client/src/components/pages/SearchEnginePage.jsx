import React from 'react'
import styled from "styled-components"
import DisplayList from "../DisplayList"
import DisplayContent from "./Overall/DisplayContent"

const Container = styled.div`
    display: flex;
` 
const DisplayListContainer = styled.div`
    flex: 4;
`
const DisplayContentContainer = styled.div`
    flex: 12;
`

const SearchEnginePage = () => {
    return (
        <Container>
            <DisplayListContainer>
                <DisplayList />
            </DisplayListContainer>
            <DisplayContentContainer>
                <DisplayContent />
            </DisplayContentContainer>
        </Container>
    )
}

export default SearchEnginePage