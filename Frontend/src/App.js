import React from 'react';
import './App.css';

/*import SideBar from './components/navbar/navbar';*/

import Routes from './routes';
import Footer from './components/footer/footer'
function App() { 
  return (

    <>            
      <div>
        <Routes />  
        <Footer />
      </div>
    </>
  );
}

export default App;
