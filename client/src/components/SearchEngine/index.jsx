import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import List from "./List"
import Content from "./Content"

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
` 

const SearchEnginePage = () => {
    const [selectedId, setSelectedId] = useState()
    const [selectedItem, setSelectedItem] = useState(null)
    useEffect(() => {
        if (selectedId) {
            const getDetail = async () => {
                fetch('http://172.30.1.213:3600/api/v1/tasks/' + selectedId, {method: 'GET'})
                    .then((res) => res.json())
                    .then((result) => setSelectedItem(result))
                    .catch((err) => console.log(err));
            }
            getDetail()
        }
        
    }, [selectedId])
    return (
        <Container>
            <List selectedId={selectedId} setSelectedId={setSelectedId} />
            <Content item={selectedItem}/>
        </Container>
    )
}

export default SearchEnginePage