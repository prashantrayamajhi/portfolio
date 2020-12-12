import React from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

import Navbar from './nav/Navbar';
import Home from './home/Home'
import Projects from './projects/ProjectsWrapper';
import Skills from './skills/SkillsWrapper'
import Contact from './contact/Contact'


export default function Routing() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/projects" exact component={Projects} /> 
                    <Route path="/skills" exact component={Skills}  />
                </Switch>
            </Router>
        </div>
    )
}
