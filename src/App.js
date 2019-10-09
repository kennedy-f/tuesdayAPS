import React from 'react';
import './App.css';

import SideBar from './components/navbar/navbar';
import Highlights from './components/highLights/highlights';
/*import menu from './assets/menu.svg';
import joystickIcon from './assets/icons8_controller_64px_1@2x.png';
*/


function App() { 
  

 
  return (
    <>
      
        <div className="container">         

          <div id="App">
            <SideBar />      
          </div>
          <div className="content">

          </div>

          <div className="content">
            <Highlights /> 
          </div>          

        
      </div>
    </>
  );
}

export default App;
