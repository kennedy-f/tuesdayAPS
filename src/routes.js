import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home'; 
import Game from './Pages/Games'; 

export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Games123" component={Game} />
            </Switch>
        </BrowserRouter>
    )
}