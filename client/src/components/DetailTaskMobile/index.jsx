/* eslint-disable react/prop-types */
import React from 'react';
import Content from '../SearchEngine/Content';

const DetailTaskMobile = ({item, loading}) => {
  return (
    <Content item={item} loading={loading} />
  )
}

export default DetailTaskMobile;