import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home'; 
import Login from './Pages/Login'; 
import Biblioteca from './Pages/GameLib'; 
import AddGame from './Pages/AddGame'; 
import GamePage from './Pages/GamesPage'; 
import BuyGame from './Pages/BuyGame'; 
import EditGame from './Pages/EditGame'; 
import EditUser from './Pages/EditUser'; 

export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/biblioteca" component={Biblioteca} />                                        
                <Route path="/addGame" component={AddGame} />         
                <Route path="/game" component={GamePage}/>
                <Route path="/edit" component={EditGame}/>
                <Route path="/userEdit" component={EditUser}/>
                <Route path="/buygame" component={BuyGame}/>
                
                
                       
            </Switch>
        </BrowserRouter>
    )
}