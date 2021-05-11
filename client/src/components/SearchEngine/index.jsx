import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Context from '../../Context';
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
  const { projectContext } = Context.useContainer();
  const { project } = projectContext;
  const { itemId } = useParams();
  const [ selectedItem, loadDetail] = useGetTaskDetail(itemId, project);
  
  return (
    <Container>
      <Content item={selectedItem} loading={loadDetail} />
    </Container>
  );
};

export default SearchEnginePage;
