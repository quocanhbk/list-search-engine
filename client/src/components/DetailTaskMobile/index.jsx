/* eslint-disable react/prop-types */
import React from 'react';
import Content from '../SearchEngine/Content';
import AppBar from './AppBar';

const DetailTaskMobile = ({item, loading}) => {
  return (
    <>
      <AppBar />
      <Content item={item} loading={loading}/>
    </>
    
  )
}

export default DetailTaskMobile;