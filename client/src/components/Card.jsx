import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Typography from './Typography';
import StatusTag from './StatusTag';
import Tag from './Tag';

const CardWrapper = styled.div`
  padding: 16px;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${(props) => props.selected ? 'rgba(165, 156, 135, 0.25)' : 'transparent'};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.32);
`;

const CardTopWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
`;

const InfoWrapper = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-grow: 2;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
`;

const Card = ({
  title = 'title',
  subtitle = 'subtitle',
  description,
  tags,
  selected = false,
}) => {
  return (
    <CardWrapper selected={selected}>
      <CardTopWrapper>
        <Avatar src="http://localhost:3600/api/v1/avatar/son.nk@ttgvn.com" />
        <InfoWrapper>
          <Typography.CAPTION>{title}</Typography.CAPTION>
          <Typography.CAPTION>{subtitle}</Typography.CAPTION>
          {description && (
            <Typography.CAPTION>{description}</Typography.CAPTION>
          )}
        </InfoWrapper>
        <StatusTag>In Progress</StatusTag>
      </CardTopWrapper>
      {tags && (
        <TagsWrapper>
          {tags.map((tag) => (
            <Tag key={tag} display={true} text={tag} />
          ))}
        </TagsWrapper>
      )}
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  tags: PropTypes.array,
  selected: PropTypes.bool,
};

export default Card;
