import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import List from "./List"
import Content from './Content'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
` 

const SearchEnginePage = () => {
    const [selectedId, setSelectedId] = useState()
    const [selectedItem, setSelectedItem] = useState(null)
    const [loadDetail, setLoadDetail] = useState(false)
    useEffect(() => {
        if (selectedId) {
            const getDetail = async () => {
                setLoadDetail(true)
                fetch('http://172.30.1.213:3600/api/v1/tasks/M04/' + selectedId, {method: 'GET'})
                    .then((res) => res.json())
                    .then((result) => {
                        setSelectedItem(result)
                        setLoadDetail(false)
                    })
                    .catch((err) => console.log(err));
            }
            getDetail()
        }
        
    }, [selectedId])
    return (
        <Container>
            <List selectedId={selectedId} setSelectedId={setSelectedId} />
            <Content item={selectedItem} loading={loadDetail}/>
        </Container>
    )
}

export default SearchEnginePage