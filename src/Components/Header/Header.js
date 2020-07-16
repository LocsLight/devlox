import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import logo from '../../img/logo-shadow.png';

const Header = () => {

    return (
        <div className="header">
        <div data-aos="fade-down"
        data-aos-duration="1000" className='header-logo-container'>
                <Link className='logo-link' to ='/'><img src={logo} alt='Logo'/></Link>
                </div>
            <div className='header-menu-container '>
                <Link data-aos="fade-down"
                data-aos-duration="1000" data-aos-delay='800' className='header-link aboutme shadow' to ='/aboutme'>Animations css</Link>
                <Link data-aos="fade-down"
                data-aos-duration="1000" data-aos-delay='900' className='header-link curriculum shadow' to ='/curriculum'>Curriculum</Link>
                <Link data-aos="fade-down"
                data-aos-duration="1000" data-aos-delay='1000' className='header-link projets shadow' to ='/projets'>Projets</Link>
                <Link data-aos="fade-down"
                data-aos-duration="1000" data-aos-delay='1100'className='header-link cursus shadow' to ='/cursus'>Cursus</Link>
                <Link data-aos="fade-down"
                data-aos-duration="1000" data-aos-delay='1200' className='header-link contact shadow' to ='/contact'>Me contacter</Link>
            </div>
        </div>
    );
}

export default Header;
