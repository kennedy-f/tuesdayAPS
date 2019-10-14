import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home'; 
import Game from './Pages/Game'; 

export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/game" exact component={Game} />
            </Switch>
        </BrowserRouter>
    )
}