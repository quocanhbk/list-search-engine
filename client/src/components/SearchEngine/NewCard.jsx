/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Typography from '../Typography';
import StatusTag from '../StatusTag';
import Tag from '../Tag';

const CardWrapper = styled.div`
    border: 1px solid blue;
    background-color: ${(props) =>
        props.selected ? 'rgba(165, 156, 135, 0.25)' : 'transparent'};
    // box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.32);
    height: 7rem;
    display: flex;
    gap: 0.5rem;
`;
const UserZone = styled.div`
    padding: 0.5rem;
    & p {
        font-size: 0.8rem;
        flex: 1;
    }
    & div {
        flex: 2;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`
const InformationZone = styled.div`
    flex: 5;
    
`
const ButtonZone = styled.div`
`
const Headline = styled.p`
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    font-size: 1rem;
`
const Card = ({assignee, headline, progress, category, dueDate, selected}) => {
    const getName = () => {
        let nameArr = assignee.split(" ")
        return nameArr.slice(nameArr.length - 2, nameArr.length).join(" ")
    }
    return (
        <CardWrapper selected={selected}>
            <UserZone>
                <div>
                    <Avatar src="/avatar.png"/>
                </div>
                <p>{getName()}</p>
            </UserZone>
            <InformationZone>
                <Headline>{headline}</Headline>
            </InformationZone>
            <ButtonZone>
                Button
            </ButtonZone>
        </CardWrapper>
    );
};

export default Card;
