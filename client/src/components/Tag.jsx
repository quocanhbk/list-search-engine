import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 0.2rem 0.5rem;
  color: ${(props) => props.theme.color.text.primary};
  background: ${props => props.theme.color.border.primary};
  font-size: 0.8rem;
`;

const Tag = ({ text }) => {
  return (
    <TagWrapper>
      {text}
    </TagWrapper>
  );
};

Tag.propTypes = {
  text: PropTypes.string,
  display: PropTypes.bool,
}

export default Tag;
