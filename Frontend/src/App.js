import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

/*import SideBar from './components/navbar/navbar';*/

import Routes from './routes';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
function App() { 
  return (

    <>     
      <div className="my_navbar">
        <Navbar />                
      </div>
      <div className="page"></div>
      <div className="Page">
        <Routes />  
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
