import React from 'react';
import Header from '../Header/Header';
import './styles.css';

const Landing = () => {
    return (
        <div className='page landingpage'>
        <Header/>
            <div data-aos='zoom-out'
                data-aos-duration='1200' 
                data-aos-delay='1800' className='landing-title-container shadow'>
                <h1 className='landing-title '>Créateur de contenu numérique</h1>
                <h3 className='landing-title2 '>Passionné de développement d'applications innovantes </h3>
            </div>
           <button data-aos='zoom-in'
           data-aos-delay='2000' className='header-button '>Démarrer</button>
        </div>
    );
}

export default Landing;
