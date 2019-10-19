import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home'; 
import Game from './Pages/Games'; 
import Login from './Pages/Login'; 
import Biblioteca from './Pages/GameLib'; 

export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Games123" component={Game} />
                <Route path="/login" component={Login}/>
                <Route path="/biblioteca" component={Biblioteca} />
            </Switch>
        </BrowserRouter>
    )
}