import React from 'react';
import './App.css';

import SideBar from './components/navbar/navbar';
import Routes from './routes';
import Highlights from './components/highLights/highlights'

/*import menu from './assets/menu.svg';
import joystickIcon from './assets/icons8_controller_64px_1@2x.png';
*/


function App() { 
  return (

    <>      
      <SideBar />
      <Routes />  
    </>
  );
}

export default App;
