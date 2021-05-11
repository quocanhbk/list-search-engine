import React from 'react';
import { useParams, useLocation } from 'react-router';
import styled from 'styled-components';
import useGetTaskDetail from '../../hooks/taskServices/useGetTaskDetail';
// import List from './List';
import Content from './Content';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SearchEnginePage = () => {

  // For Fetching
  const { itemId } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const project = query.get('project');
  const [ selectedItem, loadDetail] = useGetTaskDetail(itemId, project);
  
  return (
    <Container>
      <Content item={selectedItem} loading={loadDetail} />
    </Container>
  );
};

export default SearchEnginePage;
