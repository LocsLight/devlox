import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import bgAboutme from '../../img/motifs/2.png'
import Aos from 'aos';
import 'aos/dist/aos.css';



const AboutMe = () => {
    useEffect(() => {
        Aos.init()
    })
    let imgStyles = {
        opacity: '.5',
        height: '100%',
        position: 'relative',
    }
    return (
        <>
        <section className='left-bg'>
            <div  className='logo-container' ><img data-aos="fade-right" style={imgStyles} alt='stickmen de devlox' src={bgAboutme} ></img>
            </div>
        </section>

        <section className='right-content'>
            <div  className='aboutme-articles page-content'>
                <div data-aos='fade-left'>
                    <h1  className='page-title'>Salut, moi c'est Locs!</h1>
                    <h2 className='page-subtitle'>Ou Loïc, si tu préfères. </h2>
                </div>
                <section data-aos='fade-left' className='section about-me section'>
                    <p className='simple-para'>Il y a un environ un an je me suis mis en tête que j'allais devenir développeur. J'ai commencé avec un tuto de création d'un jeu snake en javascript. J'apprenais des bases d'algorythmie sans le savoir. Je me dis qu'avec toutes les ressources gratuites ou payantes dont on dispose sur le web, il est,  techniquement possible de nos jours de tout apprendre de chez soi. Grâce à tous les passionés qui nourrissent le web de connaissances, notemment, et je me dois de le souligner, les formateurs qui enseignent par la pratique. J'ai rapidement compris que c'était une affaire de passionné, que ça allait me demander un investissement personnel conséquent et que la route ne sera pas sans obstacles, mais aujourd'hui, j'ai toujours soif d'apprendre et je suis fier de ce que je fais.</p>
                </section>
            </div>
        </section>
        </>
    );
}

export default AboutMe;
