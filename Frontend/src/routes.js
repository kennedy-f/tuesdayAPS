import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home'; 
import Login from './Pages/Login'; 
import Biblioteca from './Pages/GameLib'; 
import AddGame from './Pages/AddGame'; 
import MinhaConta from './Pages/MyAccount'; 
import GamePage from './Pages/GamesPage'; 

export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/biblioteca" component={Biblioteca} />                                        
                <Route path="/addGame" component={AddGame} />         
                <Route path="/minhaConta" component={MinhaConta} />   
                
                 
                <Route path="/game" component={GamePage}/>
                
                       
            </Switch>
        </BrowserRouter>
    )
}