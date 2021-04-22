import React from 'react';
import DisplayList from '../DisplayList';
import NavBar from '../NavBar';

const MainPageV2 = () => {
  return (
    <div style={{display: 'flex'}}>
      <NavBar />
      <DisplayList />
    </div>
  )
}

export default MainPageV2;
