/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import Context from '../../Context';
import useAvatar from '../../hooks/useAvatar';

const CardWrapper = styled.div`
    border: 1px solid ${props => props.theme.color.border.primary};
    border-radius: 1rem;
    background-color: ${(props) =>
        props.selected ? props.theme.color.background.secondary : 'transparent'};
    box-shadow: ${props => props.theme.shadow};
    
    display: flex;
    min-height: 6rem;
    gap: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme.color.background.secondary};
    }
`;
const UserZone = styled.div`
    flex: 1;
    & p {
        font-size: 0.8rem;
        flex: 1;
        display: flex;
        align-items: center;
        text-align: center;
    }
    & div {
        flex: 2;
        display: flex;
        align-items: center;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const InformationZone = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //justify-content: space-between;
`

const Card = ({name, email, onClick}) => {

    const avatar = useAvatar("anh.lq@ttgvn.com")

    return (
        <CardWrapper onClick={onClick}>
            <UserZone>
                <div>
                    <Avatar src={avatar} width="40px" height="40px"/>
                </div>
            </UserZone>
            <InformationZone>
                <p>{name}</p>
                <p>{email}</p>
            </InformationZone>
        </CardWrapper>
    );
};

export default Card;
