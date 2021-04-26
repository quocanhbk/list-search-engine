import React from 'react'
import styled from "styled-components"
import List from "./List"
import DisplayContent from "./DisplayContent"

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
` 

const SearchEnginePage = () => {
    return (
        <Container>
            <List />
            <DisplayContent />
        </Container>
    )
}

export default SearchEnginePage