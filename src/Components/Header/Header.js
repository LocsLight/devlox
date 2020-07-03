import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import logo from '../../img/logo-white.png';

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className='header-logo-container'>
                    <Link className='logo-link' to ='/'><img src={logo} alt='Logo'/></Link>
                </div>
                <div className='header-menu-container'>
                    <Link className='header-link' to ='/aboutme'>À propos de moi</Link>
                    <Link className='header-link' to ='/curriculum'>Curriculum</Link>
                    <Link className='header-link' to ='/projets'>Projets</Link>
                    <Link className='header-link' to ='/cursus'>Cursus</Link>
                    <Link className='header-link' to ='/contact'>Me contacter</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
