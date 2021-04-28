import React from 'react';
import styled from 'styled-components';
import PaginationDate from './Pagination/PaginationDate';

const Container = styled.div`
    display: flex;
    width: 100%;
    color: ${(props) => props.theme.color.border.secondary};
    padding: 0.5rem;
`;
const Title = styled.div`
    flex: 2;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #807660;
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