/* eslint-disable react/prop-types */
import { matchPath, useLocation } from 'react-router-dom';
import React from 'react';
import Content from '../SearchEngine/Content';
import AppBar from './AppBar';
import useGetTaskDetail from '../../hooks/taskServices/useGetTaskDetail';

const DetailTaskMobile = () => {
  // For Fetching
  const location = useLocation();
  const match = matchPath(location.pathname, {
    path: '/:itemId',
    exact: true
  });
  const query = new URLSearchParams(location.search);
  const project = query.get('project');
  const {itemId} = match.params;
  const [ item, loading] = useGetTaskDetail(itemId, project);
  return (
    <>
      <AppBar />
      <Content item={item} loading={loading}/>
    </>
    
  )
}

export default DetailTaskMobile;