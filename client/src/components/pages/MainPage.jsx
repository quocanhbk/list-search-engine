import React from 'react';
import NavBar from '../NavBar';
import SearchEnginePage from './SearchEnginePage';
import styled from 'styled-components'

const PageContainer = styled.div`
    display: flex;
`
const NavBarContainer = styled.div`
    flex: 2
`
const BodyContainer = styled.div`
    flex: 10;
`

const MainPage = () => {
    return (
        <PageContainer>
            <NavBarContainer>
                <NavBar/>
            </NavBarContainer>
            <BodyContainer>
                <SearchEnginePage/>
            </BodyContainer>
        </PageContainer>
    )
}

export default MainPage;
