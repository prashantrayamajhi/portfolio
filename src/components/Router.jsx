import React from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

import Navbar from './nav/Navbar';
import Home from './home/Home'
import Contact from './contact/Contact'

export default function Routing() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/contact" exact component={Contact}></Route>
                </Switch>
            </Router>
        </div>
    )
}
