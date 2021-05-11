/* eslint-disable react/prop-types */
import { matchPath, useLocation } from 'react-router-dom';
import React from 'react';
import Content from '../SearchEngine/Content';
import AppBar from './AppBar';
import Context from '../../Context';
import useGetTaskDetail from '../../hooks/taskServices/useGetTaskDetail';

const DetailTaskMobile = () => {
  // For Fetching
  const { projectContext } = Context.useContainer();
  const { project } = projectContext;
  const location = useLocation();
  const match = matchPath(location.pathname, {
    path: '/:itemId',
    exact: true
  });
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