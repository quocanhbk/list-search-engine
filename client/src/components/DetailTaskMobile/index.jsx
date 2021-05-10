/* eslint-disable react/prop-types */
import { matchPath, useLocation } from 'react-router-dom';
import React, { useEffect, useState} from 'react';
import Content from '../SearchEngine/Content';
import AppBar from './AppBar';

const DetailTaskMobile = () => {
  const [item, setSelectedItem] = useState(null);
  const [loading, setLoadDetail] = useState(false);
  const location = useLocation();
  const match = matchPath(location.pathname, {
    path: '/:itemId',
    exact: true
  });
  const {itemId} = match.params;

  useEffect(() => {
    console.log(itemId, 'ID');
    if (itemId) {
      const getDetail = async () => {
        try {
          setLoadDetail(true);
          const response  = await fetch(
            'http://172.30.1.213:3600/api/v1/tasks/M04/' + itemId,
            { method: 'GET' }
          );
          if (!response.ok) {
            throw new Error('Failed to fetch detail of task ' + itemId);
          }
          const result = await response.json();
          console.log(result);
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
    <>
      <AppBar />
      <Content item={item} loading={loading}/>
    </>
    
  )
}

export default DetailTaskMobile;