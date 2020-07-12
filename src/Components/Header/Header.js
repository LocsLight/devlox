import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import logo from '../../img/logo-white.png';

const Header = () => {
    return (
        <div className="header">
            <div className='header-logo-container animate-pop-in'>
                <Link className='logo-link' to ='/'><img src={logo} alt='Logo'/></Link>
            </div>
            <div className='header-menu-container animate-pop-in'>
                <Link className='header-link aboutme' to ='/aboutme'>À propos de moi</Link>
                <Link className='header-link curriculum' to ='/curriculum'>Curriculum</Link>
                <Link className='header-link projets' to ='/projets'>Projets</Link>
                <Link className='header-link cursus' to ='/cursus'>Cursus</Link>
                <Link className='header-link contact' to ='/contact'>Me contacter</Link>
            </div>
        </div>
    );
}

export default Header;
