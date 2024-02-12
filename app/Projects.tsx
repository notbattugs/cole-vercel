import React from 'react';
import SideBarWithLogos from './components/SideBarWithLogos';
import Header from './components/Header';

export default function Projects() {
  return (
    <div
      style={{
        backgroundColor: '#282C33',
        position: 'relative',
        overflow: 'scroll',
      }}
    >
      <div style={{ display: 'flex' }}>
        <SideBarWithLogos />
        <div>
          <Header />
          <br />
        </div>
      </div>
    </div>
  );
}
