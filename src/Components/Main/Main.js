import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Landing from '../Landing/Landing';
import AboutMe from '../AboutMe/AboutMe';
import Curriculum from '../Curriculum/Curriculum';
import Projets from '../Projets/Projets';
import Cursus from '../Cursus/Cursus';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


import './styles.css'


const Main = () => {
    document.body.className += 'js-loading';
    const montrerPage = () => {
        document.body.className = document.body.className.replace('js-loading',''); 
    }
    window.addEventListener('load', montrerPage, false);

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
                <div className='navigation'>
                    <div className='pageList'>
                        <li className='simpleLink'>1</li>
                        <li className='simpleLink'>2</li>
                        <li className='simpleLink'>3</li>
                        <li className='simpleLink'>4</li>
                        <li className='simpleLink'>5</li>
                    </div>
                </div>
                <div className='arrow-container'>
                    <div className='bounce'>
                        <i className="arrow down "></i>
                    </div>
                </div>
                <div className='page aboutme-container'>
                    <AboutMe/>
                </div>
                <div className='page projets-container'>
                    <Projets/>
                </div>
                <div className='page contact-container'>
                    <Contact/>
                </div>
                <div className='page curriculum-container'>
                    <Curriculum/>
                </div>
                <div className='footer-container'>
                    <Footer/>        
                </div>
            </div>
    );
}

export default Main;
