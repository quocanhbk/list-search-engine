import React from 'react';
import styled from 'styled-components';
import PaginationDate from './Pagination/PaginationDate';

const Container = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #a59c87;
`;
const Title = styled.div`
    width: 15%;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #807660
`;
function ChooseDate() {
    return (
        <Container>
            <Title>
                Work Item
            </Title>
            <PaginationDate/>
        </Container>
    );
}

export default ChooseDate;