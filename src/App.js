import React from 'react';
import './App.css';

import SideBar from './components/navbar/navbar';

import Routes from './routes';

function App() { 
  return (

    <>      
      <SideBar />
      <div>
        <Routes />  
      </div>
    </>
  );
}

export default App;
