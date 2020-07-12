import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Landing from '../Landing/Landing';
import AboutMe from '../AboutMe/AboutMe';
import Curriculum from '../Curriculum/Curriculum';
import Projets from '../Projets/Projets';
import Cursus from '../Cursus/Cursus';
import Contact from '../Contact/Contact';
import './styles.css'


const Main = () => {
    return (
        <div className='main-landing'>
                <Switch>
                    <Route exact path='/' component = {Landing}></Route>
                    <Route path='/aboutme' component = {AboutMe}></Route>
                    <Route path='/curriculum' component = {Curriculum}></Route>
                    <Route path='/projets' component = {Projets}></Route>
                    <Route path='/cursus' component = {Cursus}></Route>
                    <Route path='/contact' component = {Contact}></Route>
                </Switch>
                <div className='arrow-container'>
                <i class="arrow down"></i>
                </div>
        </div>
    );
}

export default Main;
