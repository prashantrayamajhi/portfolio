import React from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

import Navbar from './nav/Navbar';
import Home from './home/Home'
import Blog from './blog/BlogsWrapper'

export default function Routing() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/blog" exact component={Blog} />
                </Switch>
            </Router>
        </div>
    )
}
