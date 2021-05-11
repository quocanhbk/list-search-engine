/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
// import List from './List';
import Content from './Content';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SearchEnginePage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [loadDetail, setLoadDetail] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    if (itemId) {
      const getDetail = async () => {
        try {
          setLoadDetail(true);
          const response = await fetch(
            'http://172.30.1.213:3600/api/v1/tasks/M04/' + itemId,
            { method: 'GET' }
          );
          if (!response.ok) {
            throw new Error('Failed to fetch detail of task ' + itemId);
          }
          const result = await response.json();
          setSelectedItem(result);
        } catch (err) {
          console.error(err);
        } finally {
          setLoadDetail(false);
        }
      };
      getDetail();
    }
  }, [itemId]);
  return (
    <Container>
      <Content item={selectedItem} loading={loadDetail} />
    </Container>
  );
};

export default SearchEnginePage;
