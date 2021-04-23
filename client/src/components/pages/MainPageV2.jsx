import React from 'react';
import DisplayList from '../DisplayList';
import NavBar from '../NavBar';
import DisplayContent from './Overall/DisplayContent';

const MainPageV2 = () => {
  return (
    <div style={{display: 'flex'}}>
      <NavBar />
      <DisplayList />
      <DisplayContent />
    </div>
  )
}

export default MainPageV2;
