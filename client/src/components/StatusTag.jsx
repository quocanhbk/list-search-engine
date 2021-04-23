import styled from 'styled-components';

const StatusTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  max-height: 24px;
  border-radius: 12px;
  font-size: 12px;
  color: #ffffff;
  background-color: ${(props) => props.backgroundColor ? props.theme.color.fill[props.backgroundColor] : props.theme.color.fill.info};
`;

export default StatusTag;